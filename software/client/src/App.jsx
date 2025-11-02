// this is the main jsx file for the React application

import React, { useEffect, useState } from 'react'
import axios from 'axios' // library to make HTTP requests
import ServiceList from './components/ServiceList'
import LoginForm from './components/LoginForm'
import CreateServiceForm from './components/CreateServiceForm'

const API = 'http://localhost:3333/api'

function getToken(){
  return localStorage.getItem('token')
}

axios.interceptors.request.use(cfg => {
  const t = getToken()
  if(t) cfg.headers['Authorization'] = 'Bearer ' + t
  return cfg
})

export default function App(){
  const [services, setServices] = useState([]) 
  // services is initialized as an empty array
  // useState initizializes the state variable 'services' and provides a function 'setServices' that can be used to update it (react needs the setServices so it can re-render the component when the state changes)
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(localStorage.getItem('username'))
  // same as above, but for the 'user' and 'loading' state variables

  useEffect(() => { fetchServices() }, [])

  async function fetchServices(){ // async functions return promises (an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value)
    // in this example, fetchServices returns a promise, so when it is called, it will return something that can be used later when the async operation is completed
    setLoading(true)
    try{
      const res = await axios.get(API + '/services') // the await keyword makes this function wait until the promise returned by axios.get is resolved
      // axios.get makes a GET request to the specified URL and returns a promise for the variable services
      setServices(res.data)
    }catch(err){
      console.error(err)
    }finally{
      setLoading(false)
    }
  }

  function onLogin({ token, username }){
    localStorage.setItem('token', token)
    localStorage.setItem('username', username)
    setUser(username)
  }

  function onLogout(){
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    setUser(null)
  }

  return (
    <div className="app">
      <header className="header">
        <div className="headerElements">
            <h1>AJUDEI</h1>
            <div className="locationButton">
              <img src="https://cdn-icons-png.flaticon.com/512/7606/7606169.png" width="30px" height="30px"></img>
              <span className="locationName">São Paulo</span>
              <img width="24" height="24" src="https://img.icons8.com/ios/50/000000/expand-arrow--v2.png" alt="expand-arrow--v2"/>
            </div>
            <div className="rightElements">
              <p>Ajuda</p>
              <p>Fórum</p>
              <p>Encontre Trabalho</p>
              <img width="30" height="30" src="https://img.icons8.com/material-sharp/24/FFFFFF/bell.png" alt="bell"/>
              <div className="auth">
                {user ? (
                  <div>
                    <div className="circle"></div>
                    <button onClick={() => { axios.post(API + '/logout'); onLogout() }}>Logout</button>
                  </div>
                ) : <LoginForm onSuccess={onLogin} />}
              </div>

            </div>
        </div>
      </header>

      <main>
        <div className='cardsArea'>
          {user && <CreateServiceForm onCreated={fetchServices} />}
          {loading ? <p>Carregando serviços...</p> : <ServiceList services={services} onUpdated={fetchServices} />}
        </div>

      </main>
    </div>
  )
}
/* notes:
------------------------------------------------------------------------------------------
{user ? (
  <div>
    <span>Logado como {user}</span>
    <button onClick={() => { axios.post(API + '/logout'); onLogout() }}>Logout</button>
  </div>
) : <LoginForm onSuccess={onLogin} />}
</div>

--> If user is not null then show the div with the username and logout button
--> If user is null then show the LoginForm component
------------------------------------------------------------------------------------------

{user && <CreateServiceForm onCreated={fetchServices} />} 
--> If user is not null then show the CreateServiceForm component

------------------------------------------------------------------------------------------

{loading ? <p>Carregando serviços...</p> : <ServiceList services={services} onUpdated={fetchServices} />}
--> if loading is true then show the paragraph "Carregando serviços..."
--> if loading is false then show the ServiceList component with the services and onUpdated props

------------------------------------------------------------------------------------------  



*/