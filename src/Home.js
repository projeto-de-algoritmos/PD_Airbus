import React, { useState } from 'react';
import './App.css';
import AddItem from './Components/AddItem/index';
import MaxWeight from './Components/MaxWeight';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
// import Caminhao from './img/caminhao.png';
import Van from './img/van.png';
import Logo from './img/truck.svg';
import knapsack from './Knapsack';
import ListItems from './Components/ListItems';
import { Alert, NavbarBrand } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

function Home() {
  const [pesos, setPesos] = useState([0]);
  const [valores, setValores] = useState([0]);
  const [nomes, setNomes] = useState(['Exemplo de nome']);
  const [maxWeight, setMaxWeight] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [result, setResult] = useState(0);

  return (
    <div className="App">
      <Navbar bg="navbar" variant="dark" sticky="top">
        <NavbarBrand style={{padding: '20px'}}>Mercadito</NavbarBrand>
      </Navbar>
      
      <div className="bottom-div">
        <MaxWeight
          setMaxWeight={setMaxWeight}
        />
        <AddItem
          pesos={pesos}
          setPesos={setPesos}
          valores={valores}
          setValores={setValores}
          nomes={nomes}
          setNomes={setNomes}
        />
      </div>
      <div style={{color: '#636060', fontFamily: 'Helvetica', fontSize: '20px', fontWeight: '800', marginTop: '10px', height: '100px', textAlign: 'left', marginLeft: '30px' }}>Acompanhe a lista de itens já adicionados</div>

      <ListItems
        nomes={nomes}
        valores={valores}
        pesos={pesos}
      />
      {
          showAlert ?
          <Alert
            variant="success"
            onClose={() => setShowAlert(false)} 
            dismissible
          >
              <Alert.Heading>Resultado:</Alert.Heading>
              <p>
                  O valor máximo possível de ser transportado no seu caminhão é R${result}
              </p>
          </Alert>
          : <Button onClick={()=> {setShowAlert(true); knapsack({valores, pesos, maxWeight, setResult})}} style={{marginBottom: '15px'}}>Calcular</Button>
      }
    </div>
  );
}

export default Home;
