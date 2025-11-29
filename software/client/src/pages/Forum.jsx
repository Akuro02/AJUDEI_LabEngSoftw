import React from 'react';

export default function Forum() {
    // Style for each "Post" in the feed
    const postStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Glass effect
        marginBottom: '20px',
        borderRadius: '15px',
        padding: '20px',
        border: '1px solid rgba(255,255,255,0.1)'
    };

    // Style for the "Avatar" circles
    const avatarStyle = {
        width: '45px',
        height: '45px',
        borderRadius: '50%',
        backgroundColor: 'white',
        color: '#023e1a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: '1.2rem',
        marginRight: '15px'
    };

    return (
        // 1. OUTER WRAPPER: Matches Ajuda page
        <div style={{ backgroundColor: '#f8f9fa', minHeight: 'calc(100vh - 70px)', padding: '40px 20px' }}>
            
            {/* 2. INNER CONTAINER: The Green Card */}
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
                        <h1 style={{ fontSize: '2.5rem', fontWeight: '800' }}>Fórum da Comunidade</h1>
                        <p style={{ opacity: 0.8 }}>Veja o que as ONGs e voluntários estão comentando.</p>
                    </div>
                    {/* Fake "New Post" Button */}
                    <button style={{
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: '20px',
                        fontWeight: 'bold',
                        cursor: 'not-allowed'
                    }}>
                        + Nova Postagem
                    </button>
                </div>

                {/* "Create Post" Fake Input Area */}
                <div style={{ 
                    backgroundColor: 'rgba(0,0,0,0.2)', 
                    padding: '15px', 
                    borderRadius: '10px', 
                    marginBottom: '40px',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <div style={{...avatarStyle, width: '35px', height: '35px', fontSize: '0.8rem'}}>EU</div>
                    <input 
                        placeholder="No que você está pensando? Compartilhe com a comunidade..." 
                        disabled
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: 'white',
                            width: '100%',
                            outline: 'none',
                            fontSize: '1rem'
                        }}
                    />
                </div>

                {/* --- FEED STARTS HERE --- */}

                {/* Post 1 */}
                <div style={postStyle}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                        <div style={avatarStyle}>AP</div>
                        <div>
                            <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Amigos do Parque</h3>
                            <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>ONG • Há 2 horas</span>
                        </div>
                    </div>
                    <p style={{ lineHeight: '1.6', opacity: 0.9 }}>
                        Gostaríamos de agradecer a todos os <strong>15 voluntários</strong> que compareceram ao mutirão de limpeza ontem em Cotia! 🌳✨
                        <br/>
                        Conseguimos recolher mais de 50kg de resíduos. Fiquem ligados para a próxima edição em breve!
                    </p>
                    <div style={{ marginTop: '15px', display: 'flex', gap: '20px', opacity: 0.7, fontSize: '0.9rem' }}>
                        <span>❤️ 24 Curtidas</span>
                        <span>💬 3 Comentários</span>
                    </div>
                </div>

                {/* Post 2 */}
                <div style={postStyle}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                        <div style={avatarStyle}>CV</div>
                        <div>
                            <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Cultura Viva</h3>
                            <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>ONG • Há 5 horas</span>
                        </div>
                    </div>
                    <p style={{ lineHeight: '1.6', opacity: 0.9 }}>
                        📢 <strong>Atenção Voluntários!</strong><br/>
                        Estamos precisando urgente de doações de livros infantis para o projeto "Leitura na Praça". 
                        Quem puder ajudar, por favor leve até nossa sede até sexta-feira.
                    </p>
                    <div style={{ marginTop: '15px', display: 'flex', gap: '20px', opacity: 0.7, fontSize: '0.9rem' }}>
                        <span>❤️ 42 Curtidas</span>
                        <span>💬 12 Comentários</span>
                    </div>
                </div>

                {/* Post 3 */}
                <div style={postStyle}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                        <div style={{...avatarStyle, backgroundColor: '#888'}}>JS</div>
                        <div>
                            <h3 style={{ margin: 0, fontSize: '1.1rem' }}>João Silva</h3>
                            <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>Voluntário • Ontem</span>
                        </div>
                    </div>
                    <p style={{ lineHeight: '1.6', opacity: 0.9 }}>
                        Participei da minha primeira ação hoje no abrigo de animais. Foi incrível ver o trabalho sério que vocês fazem! 
                        Já me inscrevi para a próxima semana. 🐶
                    </p>
                    <div style={{ marginTop: '15px', display: 'flex', gap: '20px', opacity: 0.7, fontSize: '0.9rem' }}>
                        <span>❤️ 8 Curtidas</span>
                        <span>💬 1 Comentário</span>
                    </div>
                </div>

            </div>
        </div>
    );
}