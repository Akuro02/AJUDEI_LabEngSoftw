// this is the main jsx file for the React application

import React, { useEffect, useState } from 'react'
import axios from 'axios' // library to make HTTP requests
import ServiceList from './components/ServiceList'
import LoginForm from './components/LoginForm'
import CreateServiceForm from './components/CreateServiceForm'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/layout'
import Ajuda from './pages/Ajuda'
import Forum from './pages/Forum'
import Notifications from './pages/notifications'


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
  const [userCategory, setUserCategory] = useState(localStorage.getItem('category'))
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

  function onLogin({ token, username, category}){
    localStorage.setItem('token', token)
    localStorage.setItem('username', username)
    localStorage.setItem('category', category)
    setUser(username)
    setUserCategory(category)
    window.location.reload();
  }

  function onLogout(){
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    setUser(null)
    setUserCategory(null)
  }

  return (
    <Router>
      <Routes>
        <Route element={
            <Layout 
               user={user} 
               onLogout={onLogout} 
               onLogin={onLogin} 
               API={API} 
            />
          }>
          
          <Route 
             path="/" 
             element={
                <Home 
                   user={user} 
                   userCategory={userCategory} 
                   loading={loading} 
                   services={services} 
                   fetchServices={fetchServices} 
                />
              } 
          />

          <Route 
            path="/ajuda"
            element={
              <Ajuda/>
            }
          
          />

          <Route 
            path="/forum"
            element={
              <Forum/>
            }
          />

          <Route
            path="/notifications"
            element={<Notifications/>}
          />
          
        </Route>
      </Routes>
    </Router>
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