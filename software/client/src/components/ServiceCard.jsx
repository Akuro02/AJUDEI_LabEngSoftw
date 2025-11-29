import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the hook to change pages

export default function ServiceCard({ service }) {
  const navigate = useNavigate();

  return (
    <div className="card">
      <div className="card-image-container">
        <img src={service.imageSource} alt='image' className='card-image' />
      </div>
      
      <div className='card-content'>
        <h3>{service.title}</h3>
        <p style={{ margin: '2px 0 6px 0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {service.owner} - {service.location}
        </p>
        <p className='Card-description'>{service.description}</p>
        
        <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
          <p>Vagas: {service.slots}</p>
          
          <div style={{ marginTop: 0 }}>
            <button 
                onClick={() => navigate(`/service/${service._id}/apply`)} 
                disabled={service.slots <= 0}
            >
              {service.slots > 0 ? 'Inscrever-se' : 'Sem vagas'}
            </button>
          </div>
        </div>
        
      </div>
    </div>
  )
}