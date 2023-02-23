import React from 'react';
import { Header, Posts, Footer} from './components';
import './App.css'

function App() {

  return (
    <div className="container">
      <Header />
      <div className="content">
        <div className="col">
          <main>
            <Posts />
          </main>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App;