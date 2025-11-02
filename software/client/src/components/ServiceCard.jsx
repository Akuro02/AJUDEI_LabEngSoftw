// This jsx is for each individual service card displayed in the service list

import React, { useState } from 'react'
import axios from 'axios'

export default function ServiceCard({ service, onUpdated }){
  const [busy, setBusy] = useState(false)

  async function join(){
    setBusy(true)
    try{
      await axios.post(`http://localhost:3333/api/services/${service.id}/join`)
      if(onUpdated) onUpdated()
    }catch(err){
      alert(err.response?.data?.error || 'Erro ao se inscrever')
    }finally{
      setBusy(false)
    }
  }

  return (
    <div className="card">
      <div className="card-image-container">
        <img src='https://blog.gerandofalcoes.com/wp-content/uploads/2022/10/moda-circular-e1668766786832.jpg' alt='image' className='card-image'></img>
      </div>
      <div className='card-content'>
        <h3>{service.title}</h3>
        <p>{service.owner} - {service.location}</p>
        <p>{service.description}</p>
        <p>Vagas: {service.slots}</p>
        <div style={{marginTop:8}}>
          <button onClick={join} disabled={busy || service.slots <= 0}>
            {service.slots > 0 ? (busy ? 'Inscrevendo...' : 'Inscrever-se') : 'Sem vagas'}
          </button>
        </div>
      </div>
    </div>
  )
}
