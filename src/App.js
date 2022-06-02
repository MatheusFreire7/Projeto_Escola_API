import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Logo from './components/template/Logo';
import Menu from './components/template/Menu';
import Footer from './components/template/Footer';
import Rotas from './Rotas';


//import Routes from './Routes';

function App() {
  return (
          <BrowserRouter>
        <div className="App">
            <Logo />
            <Menu />
            <Rotas />
            <Footer />
          </div>
      </BrowserRouter>
  );
}

export default App;


/*    <BrowserRouter>
      <div className="App">
          <Logo />
          <Menu />
          <CrudAluno />
          <Routes />
          <Footer />

          <Main title="Bem Vindo!">
            <div>Cadastro de alunos, cursos e carômetro</div>
          </Main>
      </div>
    </BrowserRouter>

    */