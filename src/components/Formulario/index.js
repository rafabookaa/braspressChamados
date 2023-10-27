/* eslint-disable jsx-a11y/alt-text */

import styled from 'styled-components';
import styles from './form.css';
import {useState} from 'react';

const FormularioContainer = styled.section`
  background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
  color: #FFF;
  text-align: center;
  display:flex;
  justify-content: center;
  height: 350px;
  width: 100%;
`

function Formulario () {
 
  const [data, setData] = useState({
    filial: '',
    operadora: '',
    solicitante: '',
    descricao: '',
    chamado: ''
  });

  const valorInput = event => setData({...data, [event.target.name]: event.target.value});

  const sendMsg = (event) => {
    event.preventDefault();

    console.log(`Filial: ${data.filial}`)}

  return (
    <FormularioContainer>
      <form className={styles.form} onSubmit={sendMsg}>        
        <div>
        <label>Filial: </label>
        <input type='text' name='filial' placeholder='Sigla da filial' onChange={valorInput}></input>
        </div>
        <div>
        <label>Operadora: </label>
        <input type='text' name='operadora' placeholder='Nome da Operadora' onChange={valorInput}></input>
        </div>
        <div>       
        <label>Solicitante: </label>
        <input type='text' name='solicitante' placeholder='Nome de quem abriu o chamado' onChange={valorInput}></input>
        </div> 
        <div>
        <label>Descrição: </label>
        <input type='text' name='descricao' placeholder='Relate o problema' onChange={valorInput}></input>
        </div>
        <div>
        <label>Chamado: </label>
        <input type='text' name='chamado' placeholder='Digite o protocolo' onChange={valorInput}></input>
        </div>
        <input className="botao" type='submit' value='Regitrar chamado'></input>        
      </form>      
    </FormularioContainer>   
    
  )
}

export default Formulario;

