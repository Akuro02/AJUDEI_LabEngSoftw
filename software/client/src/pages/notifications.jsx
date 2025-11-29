import React from 'react';

export default function Notifications() {
    // Style for each Notification item
    const itemStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Glass effect
        marginBottom: '15px',
        borderRadius: '12px',
        padding: '20px',
        border: '1px solid rgba(255,255,255,0.1)',
        display: 'flex',
        alignItems: 'flex-start', // Align icon with top of text
        gap: '15px'
    };

    // Style for the Icon container
    const iconBoxStyle = {
        minWidth: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: 'rgba(255,255,255,0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.2rem'
    };

    return (
        // 1. OUTER WRAPPER (Light Gray)
        <div style={{ backgroundColor: '#f8f9fa', minHeight: 'calc(100vh - 70px)', padding: '40px 20px' }}>
            
            {/* 2. INNER CONTAINER (Dark Green Card) */}
            <div style={{ 
                maxWidth: '900px', 
                margin: '0 auto', 
                backgroundColor: '#023e1a', 
                borderRadius: '25px',       
                padding: '40px',            
                color: 'white',             
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)' 
            }}>
                
                {/* Header Section */}
                <div style={{ marginBottom: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '5px' }}>Notificações</h1>
                        <p style={{ opacity: 0.8 }}>Fique por dentro das atualizações da sua conta.</p>
                    </div>
                    
                    {/* Fake "Mark as Read" Button */}
                    <button style={{
                        background: 'transparent',
                        border: '1px solid rgba(255,255,255,0.5)',
                        color: 'white',
                        padding: '8px 15px',
                        borderRadius: '20px',
                        cursor: 'not-allowed',
                        fontSize: '0.8rem'
                    }}>
                        ✓ Marcar tudo como lido
                    </button>
                </div>

                {/* --- LIST STARTS HERE --- */}

                {/* Item 1: Success/Approval */}
                <div style={itemStyle}>
                    <div style={{...iconBoxStyle, backgroundColor: '#4CAF50', color: 'white'}}>✅</div>
                    <div>
                        <h4 style={{ margin: '0 0 5px 0', fontSize: '1.1rem' }}>Inscrição Confirmada</h4>
                        <p style={{ margin: 0, opacity: 0.9, lineHeight: '1.5' }}>
                            Sua inscrição para <strong>"Limpeza do Parque"</strong> foi aprovada pelo organizador.
                            Prepare-se para o evento neste sábado!
                        </p>
                        <span style={{ fontSize: '0.8rem', opacity: 0.6, marginTop: '8px', display: 'block' }}>Há 30 minutos</span>
                    </div>
                </div>

                {/* Item 2: System/Welcome */}
                <div style={itemStyle}>
                    <div style={{...iconBoxStyle, backgroundColor: '#2196F3', color: 'white'}}>👋</div>
                    <div>
                        <h4 style={{ margin: '0 0 5px 0', fontSize: '1.1rem' }}>Bem-vindo ao AJUDEI!</h4>
                        <p style={{ margin: 0, opacity: 0.9, lineHeight: '1.5' }}>
                            Ficamos felizes em ter você por aqui. Complete seu perfil para encontrar as melhores oportunidades de voluntariado perto de você.
                        </p>
                        <span style={{ fontSize: '0.8rem', opacity: 0.6, marginTop: '8px', display: 'block' }}>Há 2 horas</span>
                    </div>
                </div>

                {/* Item 3: Alert/Reminder */}
                <div style={itemStyle}>
                    <div style={{...iconBoxStyle, backgroundColor: '#FF9800', color: 'white'}}>📅</div>
                    <div>
                        <h4 style={{ margin: '0 0 5px 0', fontSize: '1.1rem' }}>Lembrete de Evento</h4>
                        <p style={{ margin: 0, opacity: 0.9, lineHeight: '1.5' }}>
                            O evento <strong>"Bazar Comunitário"</strong> acontece amanhã às 09:00. Não se atrase!
                        </p>
                        <span style={{ fontSize: '0.8rem', opacity: 0.6, marginTop: '8px', display: 'block' }}>Ontem</span>
                    </div>
                </div>

                {/* Item 4: Community */}
                <div style={itemStyle}>
                    <div style={{...iconBoxStyle, backgroundColor: '#9C27B0', color: 'white'}}>💬</div>
                    <div>
                        <h4 style={{ margin: '0 0 5px 0', fontSize: '1.1rem' }}>Nova resposta no Fórum</h4>
                        <p style={{ margin: 0, opacity: 0.9, lineHeight: '1.5' }}>
                            <strong>Amigos do Parque</strong> respondeu ao seu comentário na postagem sobre reciclagem.
                        </p>
                        <span style={{ fontSize: '0.8rem', opacity: 0.6, marginTop: '8px', display: 'block' }}>Há 2 dias</span>
                    </div>
                </div>

                {/* End of List Message */}
                <div style={{ textAlign: 'center', opacity: 0.5, marginTop: '30px', fontSize: '0.9rem' }}>
                    -- Fim das notificações --
                </div>

            </div>
        </div>
    );
}