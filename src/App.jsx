import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Saudacao from './components/Saudacao'
import Rodape from './components/Rodape'
import Alerta from './components/Alerta'
import EmailImput from './components/EmailInput'
import EmailField from './components/EmailField'
import PasswordField from './components/PasswordField'
import LoginButton from './components/LoginButton'
import Perfil from './components/Perfil'
import Produto from './components/Produto'
import Container from '../Container'

function App() {
const nome = "Rafaella";
const anoNascimento = 1976;
      function calculaIdade() {
      return 2025 - anoNascimento;
} 
return (  
          <div>
            <h1> Olá, {nome}!</h1>;
            <h1> Você tem {calculaIdade()} anos</h1>;
            
            	<Saudacao />
		      <Produto nome="caderno" preco={3.5} emEstoque={true}/>
                  <Produto nome="Mouse" preco={80.00} emEstoque={false} />
                  <Produto nome="Laptop" preco={4500.50} emEstoque={true} />
                  <Container>
            <h1>Título Principal</h1>
            <p>Todo este conteúdo está dentro do container.</p>
            <p>Rafaella está testanddddoooo.</p>
         

            </Container>



          </div>

)    
}

export default App
