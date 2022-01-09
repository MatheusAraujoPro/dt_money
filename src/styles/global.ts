import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  /* Definido Variáveis no CSS */
  :root{
    --background: #f0f2f5;
    --red:#e52E4D;
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

  button{
    cursor: pointer;
  }

  /* Para todo o conteúdo desablitado */
  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }

`