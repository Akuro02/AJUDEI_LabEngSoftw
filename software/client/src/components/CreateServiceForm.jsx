// This jsx is for the form to create a new service

import React, { useState } from 'react'
import axios from 'axios'
const API = 'http://localhost:3333/api'

export default function CreateServiceForm({ onCreated }){
  const [title, setTitle] = useState('')
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [slots, setSlots] = useState(1)
  const [busy, setBusy] = useState(false)

  async function submit(e){
    e.preventDefault()
    setBusy(true)
    try{
      await axios.post(API + '/services', { title, location, description, slots })
      setTitle(''); setLocation(''); setDescription(''); setSlots(1);
      if(onCreated) onCreated()
    }catch(err){
      alert(err.response?.data?.error || 'Erro ao criar serviço')
    }finally{ setBusy(false) }
  }

  return (
    <form className="create" onSubmit={submit}>
      <h3>Criar serviço</h3>
      <input placeholder="Título" value={title} onChange={e=>setTitle(e.target.value)} required />
      <input placeholder="Local" value={location} onChange={e=>setLocation(e.target.value)} required />
      <input placeholder="Descrição" value={description} onChange={e=>setDescription(e.target.value)} required />
      <input type="number" min="1" value={slots} onChange={e=>setSlots(e.target.value)} required />
      <button type="submit" disabled={busy}>{busy ? 'Criando...' : 'Criar'}</button>
    </form>
  )
}
