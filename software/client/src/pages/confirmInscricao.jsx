import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API = 'http://localhost:3333/api';

export default function ConfirmInscricao() {
    const { id } = useParams(); // Get Service ID from URL
    const navigate = useNavigate();
    
    // Form States
    const [role, setRole] = useState('');
    const [availability, setAvailability] = useState('');
    const [experience, setExperience] = useState('');
    const [observations, setObservations] = useState('');
    const [sharedData, setSharedData] = useState(false);
    const [serviceTitle, setServiceTitle] = useState('Carregando...');

    // Fetch service name just to show on title
    useEffect(() => {
        // In a real app we would fetch the specific service, 
        // for now let's just assume the ID is correct.
        // You could add a fetch call here if you want the exact title.
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await axios.post(`${API}/services/${id}/apply`, {
                role, availability, experience, observations, sharedData
            });
            alert("Inscrição Confirmada!");
            navigate('/'); // Go back to home
        } catch (err) {
            alert(err.response?.data?.error || "Erro ao inscrever");
        }
    }

    // Styles for the inputs (Dark strips on green background)
    const inputStyle = {
        width: '100%',
        padding: '10px',
        backgroundColor: 'rgba(0, 0, 0, 0.2)', // Dark transparent green
        border: 'none',
        borderRadius: '20px',
        color: 'white',
        marginTop: '5px',
        marginBottom: '15px',
        outline: 'none'
    };

    const labelStyle = { fontWeight: 'bold', fontSize: '0.9rem' };

    return (
        <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', padding: '20px' }}>
            
            {/* Header / Back Button */}
            <div style={{ maxWidth: '800px', margin: '0 auto', marginBottom: '10px' }}>
                <button onClick={() => navigate('/')} style={{ 
                    backgroundColor: '#023e1a', color: 'white', padding: '5px 15px', 
                    borderRadius: '15px', border: 'none', fontWeight: 'bold', cursor: 'pointer' 
                }}>
                    VOLTAR
                </button>
                <h2 style={{ color: '#333', marginTop: '10px' }}>Finalizar Inscrição</h2>
                <hr style={{ borderColor: '#ccc', opacity: 0.5 }} />
            </div>

            {/* THE GREEN CARD */}
            <div style={{ 
                maxWidth: '800px', 
                margin: '0 auto', 
                backgroundColor: '#023e1a', 
                borderRadius: '25px', 
                padding: '30px', 
                color: 'white',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
            }}>
                <h2 style={{ marginTop: 0 }}>Insira algumas informações para finalizar sua inscrição</h2>

                <form onSubmit={handleSubmit}>
                    
                    <label style={labelStyle}>Que função você deseja exercer no evento?*</label>
                    <input style={inputStyle} value={role} onChange={e => setRole(e.target.value)} required />

                    <label style={labelStyle}>Você está disponível para participar em que dias e horários do evento?*</label>
                    <input style={inputStyle} value={availability} onChange={e => setAvailability(e.target.value)} required />

                    <label style={labelStyle}>Você tem experiência com voluntariado nessa área? Se sim, conte mais sobre:*</label>
                    <textarea style={{...inputStyle, height: '80px', resize: 'none'}} value={experience} onChange={e => setExperience(e.target.value)} required />

                    <label style={labelStyle}>Observações adicionais:</label>
                    <input style={inputStyle} value={observations} onChange={e => setObservations(e.target.value)} />

                    {/* Checkbox */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
                        <input 
                            type="checkbox" 
                            checked={sharedData} 
                            onChange={e => setSharedData(e.target.checked)} 
                            required 
                            style={{ width: '20px', height: '20px', cursor: 'pointer' }}
                        />
                        <label style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
                            Aceito compartilhar meus dados como nome completo, e-mail e telefone*
                        </label>
                    </div>

                    {/* Footer Info */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', opacity: 0.7, marginTop: '20px' }}>
                        <span>*Informações obrigatórias</span>
                        <span>Nosso e-mail para contato: placeholder@mail.com.br</span>
                    </div>

                    {/* Submit Button */}
                    <div style={{ textAlign: 'right', marginTop: '20px' }}>
                        <button type="submit" style={{ 
                            backgroundColor: '#012911', // Darker green button
                            color: 'white', 
                            padding: '10px 30px', 
                            borderRadius: '20px', 
                            border: 'none', 
                            fontWeight: 'bold', 
                            fontSize: '1rem',
                            cursor: 'pointer'
                        }}>
                            ENVIAR
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}