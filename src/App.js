import React, { useState } from 'react';
import { Header, Search, PostForm, Posts, Messages, Register, Login, MyPosts, Footer } from './components';
import './App.css'


function App() {
  const [token, setToken] = useState("");
  
  return (
    <div className="container">
      <Header />
      <div className="body">
        <div className="posts">
            <main>
            <div className="postHeader">
              <h3>Home</h3>
              <p><Search /></p>
          </div>
          <div>
              <PostForm setToken={setToken}token={token}/>
          </div>
          <Posts token={token}/>
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