import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Planos from './pages/planos';
import Sobre from './pages/sobre';
import Detalhes from './pages/detalhes';
import Footer from './components/Footer/index';
import { NotFound } from './pages/NotFound';


export default function App() {
  return (
      <Router>
          <div class="container">
            <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
                </a>

                <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                  <li><Link class="nav-link px-2 link-secondary" to='/'>Home</Link></li>
                  <li><Link class="nav-link px-2 link-dark" to='/sobre'>Sobre</Link></li>
                  <li><Link class="nav-link px-2 link-dark" to='/planos'>Planos</Link></li>
                </ul>

                <div class="col-md-3 text-end">
                    <button type="button" class="btn btn-outline-primary me-2">Login</button>
                    <button type="button" class="btn btn-primary">Cadastrar</button>
                </div>
            </header>
          </div>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/planos' element={<Planos />} />
          <Route path='/detalhes/:filme' element={<Detalhes/>} />
          <Route path='*' element={<NotFound />} headerHidden={true} /> 
        </Routes>
        
        <Footer />
      </Router>
  )
}

