import React, { useState } from 'react';
import './App.css';
import AddItem from './Components/AddItem/index';
import MaxWeight from './Components/MaxWeight';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import knapsack from './Knapsack';
import ListItems from './Components/ListItems';
import { Alert, NavbarBrand } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import LocalAirportSharpIcon from '@mui/icons-material/LocalAirportSharp';

function Home() {
  const [pesos, setPesos] = useState([]);
  const [valores, setValores] = useState([]);
  const [nomes, setNomes] = useState([' ']);
  const [maxWeight, setMaxWeight] = useState();
  const [showAlert, setShowAlert] = useState(false);
  const [result, setResult] = useState(0);

  return (
    <div className="App" >
      <Navbar bg="navbar" variant="dark" sticky="top">
        <NavbarBrand style={{padding: '20px'}}>
        <LocalAirportSharpIcon />  Airbus </NavbarBrand>
      </Navbar>

      <div className="text-div">
        <h2>Transporte de Cargas</h2>
        <p className="text-p" align="justify">O KC-390 Millennium é o maior avião cargueiro militar da FAB podendo transportar até 26 toneladas de carga. Quando ele é utilizado, muitas vezes sobra espaço na área de carregamento e pode ser utilizado para transportar outras mercadorias. Entretanto, a logística deve ser necessária para ele carregar apenas o que for de melhor custo-benefício, podendo ser simulado na tabela abaixo:</p>
        
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
        
      </div>

      <div className="list-div">
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
                    O valor máximo possível de cargas que serão transportadas é R${result}.
                </p>
            </Alert>
            : <Button onClick={()=> {setShowAlert(true); knapsack({valores, pesos, maxWeight, setResult})}} style={{marginBottom: '15px'}}>Calcular</Button>
        }
      </div>
    </div>
  );
}

export default Home;
