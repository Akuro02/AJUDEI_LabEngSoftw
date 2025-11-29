import React from 'react';
import axios from 'axios';
import LoginForm from './LoginForm'; 

import {Link} from 'react-router-dom';

export default function Toolbar({user, onLogout, onLogin, API}){
    return(
        <header className="header">
        <div className="headerElements">
            <Link to="/" style={{color: 'inherit', textDecoration: 'none'}}>
            <h1>AJUDEI</h1>
            </Link>
            <div className="rightElements">
                <Link to="/ajuda" style={{color: 'inherit', textDecoration: 'none'}}>Ajuda</Link>
                <Link to="/forum" style={{color: 'inherit', textDecoration: 'none'}}>Fórum</Link>
                <Link to="/" style={{color: 'inherit', textDecoration: 'none'}}>Encontre Trabalho</Link>
                <Link to="/notifications" style={{color: 'inherit', textDecoration: 'none'}}>
                <img width="30" height="30" src="https://img.icons8.com/material-sharp/24/FFFFFF/bell.png" alt="bell"/>
                </Link>
                <div className="auth">
                {user ? (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div 
                        title="Perfil"
                        style={{ 
                            width: '32px', 
                            height: '32px', 
                            borderRadius: '50%',       // Makes it a circle
                            backgroundColor: 'white',  // White color to match the icons
                            cursor: 'not-allowed'      // Shows it's not implemented yet
                        }}
                    />
                    <button 
                        onClick={() => { axios.post(API + '/logout'); onLogout() }}
                        style={{
                            background: 'none',
                            border: '1px solid white', // Thin white border
                            borderRadius: '4px',
                            color: 'white',
                            cursor: 'pointer',
                            padding: '4px 10px',
                            fontSize: '12px'
                        }}
                    >Sair</button>
                    </div>
                ) : <LoginForm onSuccess={onLogin} />}
                </div>

            </div>
        </div>
        </header>
    )
}