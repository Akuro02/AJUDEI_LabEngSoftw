// This jsx is for the list of services displayed on the main page (each service is a ServiceCard)

import React from 'react'
import ServiceCard from './ServiceCard'

export default function ServiceList({ services, onUpdated }){
  if(!services || services.length === 0) return <p>Nenhum serviço disponível.</p>
  return (
    <div className="list">
      {services.map(s => <ServiceCard key={s._id} service={s} onUpdated={onUpdated} />)}
    </div>
  )
}

/* notes:
services is an array of service objects passed as a prop from the parent component (App.jsx)
services.map(...) iterates over the services array and renders a ServiceCard component for each service


*/