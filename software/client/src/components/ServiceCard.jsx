// This jsx is for each individual service card displayed in the service list

import React, { useState } from 'react'
import axios from 'axios'

export default function ServiceCard({ service, onUpdated }){
  const [busy, setBusy] = useState(false)

  async function join(){
    setBusy(true)
    try{
      await axios.post(`http://localhost:3333/api/services/${service._id}/join`)
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
        <img src={service.imageSource} alt='image' className='card-image'></img>
      </div>
      <div className='card-content'>
        <h3>{service.title}</h3>
        <p style={{margin: '2px 0 6px 0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{service.owner} - {service.location}</p>
        <p className='Card-description'>{service.description}</p>
        <div style={{marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10}}>
          <p>Vagas: {service.slots}</p>
          <div style={{marginTop:0}}>
            <button onClick={join} disabled={busy || service.slots <= 0}>
              {service.slots > 0 ? (busy ? 'Inscrevendo...' : 'Inscrever-se') : 'Sem vagas'}
            </button>
          </div>
        </div>
        
      </div>
    </div>
  )
}
