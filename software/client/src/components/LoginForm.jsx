import React, { useState } from 'react'
import axios from 'axios'

// Ensure this matches your server port
const API = 'http://localhost:3333/api'

export default function LoginForm({ onSuccess }){
  const [isRegistering, setIsRegistering] = useState(false);
  
  // FIX 1: Renamed state to match the variables used below
  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('')
  
  const [category, setCategory] = useState('Volunteer');
  const [busy, setBusy] = useState(false)

  async function submit(e){
    e.preventDefault() 
    setBusy(true)

    const endpoint = isRegistering ? '/register' : '/login';
    
    // FIX 2: Now 'username' and 'password' actually exist!
    const payload = isRegistering 
        ? { username, password, category } 
        : { username, password };
    
    try{
      const res = await axios.post(API + endpoint, payload)
      onSuccess(res.data)
    }catch(err){
      alert(err.response?.data?.error || 'Erro na autenticação')
    }finally{ 
      setBusy(false) 
    }
  }

  return (
    <div className="login-container" style={{ display:'flex', flexDirection: 'row', alignItems: 'center', gap: '10px'}}>
          
          <form className="login" onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <input 
                  placeholder="Usuário" 
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  required
                  style={{padding: '4px', fontSize: '12px', height: '25px', width: '150px'}} 
                />
                
                <input 
                  placeholder="Senha" 
                  type="password" 
                  value={password}
                  onChange={e => setPassword(e.target.value)} 
                  required 
                  style={{padding: '4px', fontSize: '12px', height: '25px', width: '150px'}} 
                />
              {isRegistering && (
                <select value={category} onChange={e => setCategory(e.target.value)} style={{padding: '2px', fontSize: '12px', height: '25px'}}>
                  <option value="Volunteer">Voluntário</option>
                  <option value="ONG">ONG</option>
                </select>
              )}
          </form>
          <div style={{display: 'flex', flexDirection: 'column', gap:'5px', alignItems:'center', justifyContent: 'center'}}>
            <button onClick={submit} disabled={busy}>
              {busy ? 'Carregando...' : (isRegistering ? 'Registrar' : 'Entrar')}
            </button>
            <span onClick={() => setIsRegistering(!isRegistering)} style={{cursor: 'pointer', color: 'white', textDecoration: 'underline', fontSize: '10px', whiteSpace: 'nowrap'}} >
              {isRegistering ? "Fazer Login" : "Cadastrar"};
            </span>
          </div>
        </div>
  )
}