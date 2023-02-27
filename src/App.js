import React, { useState } from 'react';
import { Header, Home, Profile, LoginRegister, Messages, Register, Login, MyPosts, Footer } from './components';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  const [token, setToken] = useState("");
  
  return (
    <div className="container">
      <Header />
      <div className="body">
        <div className="posts">
          <main>
          <BrowserRouter>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Profile" element={<Profile />}/>
            <Route path="/LoginRegister" element={<LoginRegister />}/>
          </Routes>
          </BrowserRouter>
          </main>
        </div>
        <aside>
          <Register setToken={setToken} token={token} />
          <Login setToken={setToken} token={token} />
          <MyPosts setToken={setToken} token={token}/>
          <Messages token={token}/>
        </aside>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App;