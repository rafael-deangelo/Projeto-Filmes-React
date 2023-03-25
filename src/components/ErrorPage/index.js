import {Link} from 'react-router-dom';

export const ErrorPage = () => {
  return ( 
    <><div>
      <Link to="/">Voltar</Link>
    </div><div>
        <h1>Erro 404</h1>
        <p>Página não encontrada</p>
        <img src="" alt="Página não encontrada"></img>
      </div></>
  );
};