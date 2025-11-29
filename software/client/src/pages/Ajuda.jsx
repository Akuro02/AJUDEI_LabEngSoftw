import React from 'react';

export default function Ajuda() {
    // Styles for the FAQ expandable items
    // Using a semi-transparent white background to look like the inputs in your reference image
    const questionStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.1)', 
        marginBottom: '15px',
        borderRadius: '12px', // Softer corners
        padding: '15px 20px',
        cursor: 'pointer',
        border: '1px solid rgba(255,255,255,0.1)',
        transition: 'background-color 0.2s'
    };

    return (
        // 1. OUTER WRAPPER: Main page background (Light Gray/White)
        <div style={{ backgroundColor: '#f8f9fa', minHeight: 'calc(100vh - 70px)', padding: '40px 20px' }}>
            
            {/* 2. INNER CONTAINER: The Green Card */}
            <div style={{ 
                maxWidth: '900px', 
                margin: '0 auto', 
                backgroundColor: '#023e1a', // The dark green color
                borderRadius: '25px',       // Big rounded corners
                padding: '40px',            // Spacing inside the card
                color: 'white',             // White text
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)' // Subtle shadow for depth
            }}>
                
                {/* Header Section */}
                <div style={{ marginBottom: '40px', textAlign: 'center' }}>
                    <h1 style={{ fontSize: '2.8rem', marginBottom: '15px', fontWeight: '800' }}>Central de Ajuda</h1>
                    <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>
                        Tire suas dúvidas sobre o funcionamento da plataforma AJUDEI.
                    </p>
                </div>

                {/* FAQ Section */}
                <div style={{ marginBottom: '40px' }}>
                    <h2 style={{ 
                        borderBottom: '2px solid rgba(255,255,255,0.2)', 
                        paddingBottom: '15px', 
                        marginBottom: '30px',
                        fontSize: '1.5rem'
                    }}>
                        Perguntas Frequentes
                    </h2>

                    <details style={questionStyle}>
                        <summary style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Como faço para me inscrever em um trabalho voluntário?</summary>
                        <p style={{ marginTop: '15px', lineHeight: '1.7', opacity: 0.9, paddingLeft: '15px', borderLeft: '3px solid #4CAF50' }}>
                            É simples! Na página inicial, navegue pelos cards de serviços disponíveis. 
                            Se houver vagas ("Vagas: X"), basta clicar no botão <strong>"Inscrever-se"</strong>. 
                            Você precisará estar logado para confirmar sua inscrição.
                        </p>
                    </details>

                    <details style={questionStyle}>
                        <summary style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Quem pode criar novos serviços?</summary>
                        <p style={{ marginTop: '15px', lineHeight: '1.7', opacity: 0.9, paddingLeft: '15px', borderLeft: '3px solid #4CAF50' }}>
                            A criação de serviços é reservada para usuários da categoria <strong>ONG</strong>. 
                            Voluntários podem apenas se inscrever e participar das ações. Se você representa uma ONG, 
                            entre em contato para atualizar sua categoria.
                        </p>
                    </details>

                    <details style={questionStyle}>
                        <summary style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>O serviço é gratuito?</summary>
                        <p style={{ marginTop: '15px', lineHeight: '1.7', opacity: 0.9, paddingLeft: '15px', borderLeft: '3px solid #4CAF50' }}>
                            Sim! O <strong>AJUDEI</strong> é uma plataforma sem fins lucrativos desenvolvida 
                            para conectar pessoas que querem ajudar com causas que precisam de apoio.
                        </p>
                    </details>

                    <details style={questionStyle}>
                        <summary style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Esqueci minha senha, e agora?</summary>
                        <p style={{ marginTop: '15px', lineHeight: '1.7', opacity: 0.9, paddingLeft: '15px', borderLeft: '3px solid #4CAF50' }}>
                            Como esta é uma versão de demonstração (Protótipo), não possuímos sistema automático de recuperação de senha. 
                            Por favor, crie uma nova conta para continuar testando.
                        </p>
                    </details>
                </div>

                {/* Contact Section (Footer of the card) */}
                <div style={{ 
                    marginTop: '30px', 
                    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Darker inner container
                    padding: '25px', 
                    borderRadius: '15px', 
                    textAlign: 'center',
                    border: '1px solid rgba(255,255,255,0.1)'
                }}>
                    <h3 style={{ marginBottom: '10px' }}>Ainda precisa de ajuda?</h3>
                    <p style={{ marginBottom: '20px', opacity: 0.9 }}>Nossa equipe de suporte está disponível para auxiliar.</p>
                    <button style={{ 
                        padding: '12px 30px', 
                        backgroundColor: 'white', 
                        color: '#023e1a', 
                        border: 'none', 
                        borderRadius: '50px', // Pill-shaped button
                        cursor: 'not-allowed', 
                        fontWeight: 'bold',
                        fontSize: '1rem',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                    }}>
                        ✉️ Fale Conosco (suporte@ajudei.com)
                    </button>
                </div>

            </div>
        </div>
    );
}