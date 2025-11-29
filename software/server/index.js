const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const express = require('express'); // Express framework - for building HTTP servers
const cors = require('cors'); // Allow frontend to make requests to backend
const bodyParser = require('body-parser'); // Parse JSON request bodies
const mongoose = require('mongoose');
const connectDB = require('./config/dbConnection');

// Connect to MongoDB
connectDB();

// Get the database schemas
const User = require('./models/User');
const Service = require('./models/Service');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Simple in-memory users and tokens (demo only). Passwords stored in plain text for prototype.

const tokens = new Map(); // token -> username

function generateToken(username){
  return Buffer.from(username + ':' + Date.now()).toString('base64');
}

// Auth middleware
async function requireAuth(req, res, next){ // checks if the request has a valid token, meaning the user is authenticated
  const auth = req.headers['authorization'];
  if(!auth || !auth.startsWith('Bearer')) return res.status(401).json({error: 'Não autorizado'});
  const token = auth.slice(7); //remove the 'Bearer'
  try{
    const user = await User.findOne({token: token});
    if(!user) return res.status(401).json({error: 'Token Invalido'});
    req.user = user.username;
    next();
  } catch(err){
    return res.status(500).json({error: 'Erro no servidor'});
  }
  
}



app.post('/api/login', async (req, res) => { // this function handles login requests. It uses "=>" to create a function that takes req and res as parameters. It would work the same as "function login(req, res) { ... }" and then "app.post ('/api/login', login);"
  const { username, password } = req.body; // the first argument is the request object, which the "LoginForm.jsx" sends with the username and password in the body
  try{
    const user = await User.findOne({username: username, password: password});

    if (!user) return res.status(401).json({error: 'Credenciais invalidas'});

    const token = generateToken(username);
    user.token = token;
    await user.save();

    res.json({token: token, username: username, category: user.category});
  } catch(err){
    res.status(500).json({error: 'Erro interno do servidor'});
  }
  
});

app.post('/api/register', async (req, res) => {
  const {username, password, category} = req.body;

  try{
    const Existinguser = await User.findOne({username: username});
    if(Existinguser) return res.status(400).json({error: 'Ja existe alguem com esse username'});

    const token = generateToken(username);

    const newUser = await User.create({
      username,
      password,
      category,
      token
    });

    res.status(201).json({
      token: newUser.token,
      username: newUser.username,
      category: newUser.category
    });
    
  } catch(err){
    console.error(err);
    res.status(500).json({error: 'Erro ao criar conta'});
  }
});

app.post('/api/logout', (req, res) => {
  const auth = req.headers['authorization'];
  if(auth && auth.startsWith('Bearer ')){ // Bearer is the standard way to send tokens in HTTP requests
    const token = auth.slice(7); // remove the "Bearer " prefix
    tokens.delete(token);
  }
  res.json({ ok: true });
});

app.get('/api/services', async (req, res) => {
  try{
    const allServices = await Service.find();
    res.json(allServices);
  } catch(err){
    res.status(500).json({error: 'Erro ao buscar serviços'});
  }
});

// Protected: create service
app.post('/api/services', requireAuth, async (req, res) => {
  const { title, location, description, slots, imageSrc} = req.body;
  
  try {
    const newService = await Service.create({
      title,
      location,
      description,
      slots: Number(slots),
      imageSource: imageSrc,
      owner: req.user
    });

    res.status(201).json(newService);
  } catch (err){
    console.log("ERRO: "+ err);
    res.status(500).json({error: 'Erro ao criar serviço'});
  }
});

app.post('/api/services/:id/join', requireAuth, async (req, res) => {
  const id = req.params.id;
  try{
    const service = await Service.findOne({_id: id});
    if (!service) return res.status(404).json({ error: 'Serviço não encontrado' });
    if (service.slots <= 0) return res.status(400).json({ error: 'Sem vagas' });
    service.slots -= 1;
    await service.save();
    res.json(service);
  } catch(err){
    res.status(500).json({error: 'Erro ao se inscrever'});
  }
  
});

const PORT = process.env.PORT || 3333; // [TODO] I belive this should be passed to .env

//only listen if connected to mongoose
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
})

