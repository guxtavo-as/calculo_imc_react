import { useEffect, useState } from 'react';
import Calculo from './components/Calculo';
import Header from './components/Header';
import Main from './components/Main';
import TextInput from './components/TextInput';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  useEffect(() => {
    document.title = peso;
  }, [peso]);

  function handlePesoChange(newPeso) {
    setPeso(newPeso);
  }

  function handleAlturaChange(newAltura) {
    setAltura(newAltura);
  }

  return (
    <>
      <Header>Calculo do IMC:</Header>

      <Main>
        <TextInput
          id='peso'
          labelDescription="Digite o seu peso (kg):"
          inputValue={peso}
          onInputChange={handlePesoChange}
          autoFocus
        />

        <TextInput
          id='altura'
          labelDescription="Digite a sua altura (cm):"
          inputValue={altura}
          onInputChange={handleAlturaChange}
        />

        <Calculo 
          peso={peso}
          altura={altura}
        />
      </Main>
    </>
  );
}
