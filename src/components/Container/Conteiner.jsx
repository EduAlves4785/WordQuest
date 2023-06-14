
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { BoxContent, BoxInput, BtnIniciar, CategoriaSorteadaH2, SectionContent } from './Container';
import { BoxLetras } from '../BoxLetras/BoxLetras';

export const Conteiner = () => {
  const [Palavra, setPalavra] = useState('');
  const [newPalavra, setNewPalavra] = useState('');
  const [ArrLetras, setArrLetras] = useState([]);
  const [boxLetras, setBoxLetras] = useState([]);
  const[CategoriaSorteada,setCategoriaSorteada]=useState('')

  function sorteiaPalavra() {
    const Palavras = {
      frutas: [
        'maçã',
        'banana',
        'laranja',
        'uva',
        'morango',
        'abacaxi',
        'mamão',
        'melancia',
        'limão',
        'pera'
      ],
      veículos: [
        'carro',
        'moto',
        'ônibus',
        'bicicleta',
        'caminhão',
        'barco',
        'avião',
        'trem',
        'patinete'
      ],
      lugares: [
        'praia',
        'parque',
        'cidade',
        'montanha',
        'floresta',
        'museu',
        'teatro',
        'shopping',
        'hotel'
      ]
    };    
    const categorias = Object.keys(Palavras);
    const categoriaSorteada = categorias[Math.floor(Math.random() * categorias.length)];
    const palavrasCategoria = Palavras[categoriaSorteada];
    const palavraSorteada = palavrasCategoria[Math.floor(Math.random() * palavrasCategoria.length)];

    setCategoriaSorteada(categoriaSorteada)
    
    console.log('Categoria: '+categoriaSorteada)
    console.log('Palavra: '+palavraSorteada)

    setNewPalavra('');
    setArrLetras(palavraSorteada.split(''));
  }

  useEffect(() => {
    if (ArrLetras.length > 0) {
      setBoxLetras(
        ArrLetras.map((letra, i) => (
          <BoxLetras key={i} letra={letra} palavraDigitada={newPalavra.toLowerCase()} palavra={ArrLetras} />
        ))
      );
    }
  }, [ArrLetras, newPalavra]);

  function verificaPalavra() {
    const ArrPalavra = Palavra.toLowerCase().split('');
    if (ArrPalavra.length > ArrLetras.length) {
      window.alert('Palavra maior do que a sorteada');
      return;
    }
    setNewPalavra(Palavra);
  }

  function controlaWidth(Tamanho) {
    if (Tamanho >= 3 && Tamanho <= 4) {
      return '25rem';
    } else if (Tamanho >= 5 && Tamanho <= 7) {
      return '45rem';
    } else {
      return '50rem';
    }
  }

return (
  <SectionContent>
    <h1 className='H1Titulo'>WordQuest</h1>
    <BoxContent style={{ gridTemplateColumns: `repeat(${ArrLetras.length}, minmax(0, 1fr))`, width: controlaWidth(ArrLetras.length) }}>
      {ArrLetras.length > 0 ? (
        boxLetras
      ) : (
        <h1>Clique para sortear uma palavra</h1>
      )}
    </BoxContent>
    <CategoriaSorteadaH2>{CategoriaSorteada==''?' ':`A categoria sorteada foi " ${CategoriaSorteada} "`}</CategoriaSorteadaH2>
    <BtnIniciar onClick={sorteiaPalavra}>Sortear palavra</BtnIniciar>
    <BoxInput>
      <input type="text" placeholder="Digite a possível palavra" onChange={(event) => setPalavra(event.target.value)} />
      <button onClick={verificaPalavra}>GO</button>
    </BoxInput>
  </SectionContent>
);
};
