import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  /* Definido Variáveis no CSS */
  :root{
    --background: #f0f2f5;
    --red:#e52E4D;
    --green: #33cc95;
    --blue:#5429cc; 
    --blue-light: #6933ff;
    --text-title: #363f5f;
    --text-body: #969cb3;
    --shape: #FFF
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Tamanho Padrão de Fonte: 16px(Foco no Desktop) */

  html{
    @media(max-width: 1080px){
      font-size: 93.75% // 15 px
    }

    @media(max-width: 720px){
      font-size: 87.5% // 14 px
    }
  }


  body{
    background: var(--background);
    /* Deixa as fontes de navegagores baseados no Chrome mais Nítida */
    -webkit-font-smoothing: antialiased; 
  }

  /* Por padrão o Button, Input e Text Área não importam a fonte do Body */
  body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
  }

  button{
    cursor: pointer;
  }

  /* Para todo o conteúdo desablitado */
  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay{
    background: rgba(0,0,0,0.5);
    /* Ocupar a tela toda */
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content{
    width: 100%;
    /* Vai ter Width 100% até o tamanho máximo especificado */
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }

  .react-modal-close{
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition: 0.2s;
    
    &:hover{
      filter: brightness(0.9);
    }
  }

`