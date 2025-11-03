const express = require('express'); // Express framework - for building HTTP servers
const cors = require('cors'); // Allow frontend to make requests to backend
const bodyParser = require('body-parser'); // Parse JSON request bodies

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Simple in-memory users and tokens (demo only). Passwords stored in plain text for prototype.
const users = [{ username: 'admin', password: 'admin123', category: 'ONG'}, { username: 'volunteer', password: 'help', category: 'Volunteer'}];
const tokens = new Map(); // token -> username

function generateToken(username){
  return Buffer.from(username + ':' + Date.now()).toString('base64');
}

// Auth middleware
function requireAuth(req, res, next){ // checks if the request has a valid token, meaning the user is authenticated
  const auth = req.headers['authorization'];
  if(!auth || !auth.startsWith('Bearer ')) return res.status(401).json({ error: 'Não autorizado' });
  const token = auth.slice(7);
  const user = tokens.get(token);
  if(!user) return res.status(401).json({ error: 'Token inválido' });
  req.user = user;
  next();
}

// In-memory store (minimal)
let services = [
  { id: 1, title: 'Limpeza de parque', location: "Cotia, SP", description: 'Ajuda para limpar o parque central', slots: 10, owner: 'admin', imageSource: 'https://blog.gerandofalcoes.com/wp-content/uploads/2022/10/moda-circular-e1668766786832.jpg'},
  { id: 2, title: 'Aula de reforço', location: "Osasco, SP", description: 'Aulas para crianças no contraturno', slots: 5, owner: 'admin', imageSource: 'https://www.pmpf.rs.gov.br/turismo/wp-content/uploads/sites/51/2021/12/I2019-03-11_08_54_04_106220.jpg'}
];

app.post('/api/login', (req, res) => { // this function handles login requests. It uses "=>" to create a function that takes req and res as parameters. It would work the same as "function login(req, res) { ... }" and then "app.post ('/api/login', login);"
  const { username, password } = req.body; // the first argument is the request object, which the "LoginForm.jsx" sends with the username and password in the body
  const user = users.find(u => u.username === username && u.password === password); // looks for a user in the users array that matches the provided username and password
  if(!user) return res.status(401).json({ error: 'Credenciais inválidas' }); // if no matching user is found, it returns a 401 Unauthorized response with an error message
  // if a matching user is found, it generates a token for that user
  const token = generateToken(username);
  tokens.set(token, username);
  res.json({ token, username, category: user.category}); // finally, it sends a JSON response containing the generated token and the username
});

app.post('/api/logout', (req, res) => {
  const auth = req.headers['authorization'];
  if(auth && auth.startsWith('Bearer ')){ // Bearer is the standard way to send tokens in HTTP requests
    const token = auth.slice(7); // remove the "Bearer " prefix
    tokens.delete(token);
  }
  res.json({ ok: true });
});

app.get('/api/services', (req, res) => {
  res.json(services);
});

// Protected: create service
app.post('/api/services', requireAuth, (req, res) => {
  const { title, location, description, slots, imageSrc} = req.body;
  const id = services.length ? services[services.length-1].id + 1 : 1;
  const s = { id, title, location, description, slots: Number(slots) || 0, owner: req.user, imageSource: imageSrc};
  services.push(s);
  res.status(201).json(s);
});

app.post('/api/services/:id/join', requireAuth, (req, res) => {
  const id = Number(req.params.id);
  const svc = services.find(s => s.id === id);
  if (!svc) return res.status(404).json({ error: 'Serviço não encontrado' });
  if (svc.slots <= 0) return res.status(400).json({ error: 'Sem vagas' });
  svc.slots -= 1;
  res.json(svc);
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
