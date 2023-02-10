import React from 'react';
import { Header, Posts, Search, PostForm, Footer} from './components';
import './App.css'

function App() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <div className="col">
          <main>
            <Posts />
            <Search />
          </main>
        </div>
        <aside className="col">
          <PostForm />
        </aside>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App;