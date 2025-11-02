// This jsx is for the login form component, it won't be shown if the user is already logged in

import React, { useState } from 'react'
import axios from 'axios'
const API = 'http://localhost:3333/api'

export default function LoginForm({ onSuccess }){
  // onSuccess is a prop that is a function passed from the parent component (App.jsx)
  // prop is like an argument to a function, it is data passed from the parent component to the child component
  // so now, I can call the passed function when the login is successful 

  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [busy, setBusy] = useState(false)

  async function submit(e){
    e.preventDefault() // prevents the default behavior of the form submission (which is to reload the page)
    setBusy(true)
    try{
      const res = await axios.post(API + '/login', { username: user, password: pass })
      // sends a POST request to the login endpoint with the username and password
      // the server checks the credentials and returns a token if they are valid
      onSuccess(res.data)
    }catch(err){
      alert(err.response?.data?.error || 'Erro no login')
    }finally{ setBusy(false) }
  }

  return (
    <form className="login" onSubmit={submit}>
      <input placeholder="Usuário" value={user} onChange={e=>setUser(e.target.value)} required />
      <input placeholder="Senha" type="password" value={pass} onChange={e=>setPass(e.target.value)} required />
      <button type="submit" disabled={busy}>{busy ? 'Entrando...' : 'Entrar'}</button>
    </form>
  )
}
