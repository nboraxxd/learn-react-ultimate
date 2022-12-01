import './App.scss'
import Header from './components/Header/Header'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div>
        hello link
        <div>
          <button>
            <Link to={`/user`}>User page</Link>
          </button>
          <button>
            <Link to={`/admin`}>Admin page</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
