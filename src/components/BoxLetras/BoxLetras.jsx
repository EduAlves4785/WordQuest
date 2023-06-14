// eslint-disable-next-line no-unused-vars
import React, { useState,useEffect } from 'react'
import {Box}  from './Letras'

// eslint-disable-next-line react/prop-types
export const BoxLetras = ({letra,palavraDigitada,palavra}) => {
  const[status,setStatus]=useState(false)
  const[color,setColor]=useState('')
  const[palavraExist,setPalavraExist]=useState('')
function posicaoLetra() {
    // eslint-disable-next-line react/prop-types
    const posicao = palavra.indexOf(letra);
    if (palavraDigitada[posicao] === letra) {
      setStatus(true);
      setColor('RGB(141 255 118)')
    } else{
      setStatus(false);
      setColor('RGB(255 118 118)')
      // eslint-disable-next-line react/prop-types
      if(palavra.includes(palavraDigitada[posicao]) && palavra.includes(palavraDigitada[posicao])!=letra){
        setColor('RGB(255 228 142)')
        setPalavraExist(palavraDigitada[posicao])
      }
    }
    return posicao;
  }

  useEffect(() => {
    posicaoLetra()
  }, [palavraDigitada]);

  return (
    <Box style={{backgroundColor:color}}>
      <h1>{status ? letra : (!status ? 'x' : palavraExist)}</h1>
    </Box>
  )
}
