import React from 'react';
import ServiceList from '../components/ServiceList';
import CreateServiceForm from '../components/CreateServiceForm';

export default function Home({user, userCategory, loading, services, fetchServices}){
    return(
        <div className='cardsArea'>
            {user && userCategory === 'ONG' && (
                <CreateServiceForm onCreated={fetchServices} />
            )}

            {loading ? (
                <p>Carregando Serviços...</p>
            ) : (
                <ServiceList services={services} onUpdated={fetchServices} />
            )}
        </div>
    );
}