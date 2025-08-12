import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Saudacao from './components/Saudacao'
import Rodape from './components/Rodape'

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
		          <Rodape />
          </div>

)    
}

export default App
