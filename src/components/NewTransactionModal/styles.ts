import styled from 'styled-components'

export const Container = styled.form`
  h2{
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input{
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    background: #e7e9ee;
    border: 1px solid #d7d7d7;
    font-weight: 400;
    font-size: 1rem;

    /* Trocando cor do placeHolder */
    &::placeholder{
      color: var(--text-body)
    }
    /* Hack de CSS */
    & + input{
      margin-top: 1rem;
    }
  }

  button[type="submit"]{
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    /* Zera a Boarda Padrão do Botão*/
    border: 0;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 1rem;

    /*  Casando os Hacks*/

    transition: filter 0.5s;

    &:hover{
      filter: brightness(0.9);
    }
  } 
`;
