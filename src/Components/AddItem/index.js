import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './style.css';

const AddItem = ({pesos, setPesos, valores, setValores, nomes, setNomes}) =>  {
    const [show, setShow] = useState(false);
    const [pesoItem, setPesoItem] = useState(0);
    const [valorItem, setValorItem] = useState(0);
    const [nomeItem, setNomeItem] = useState('');
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function onChangePeso(ev) {
      const { value } = ev.target;
      var pesoNumber = Number (value);
      setPesoItem(pesoNumber);
    }

    function onChangeValor(ev) {
      const { value } = ev.target;
      var valorNumber = Number (value);
      setValorItem(valorNumber);
    }

    function onChangeNome(ev) {
      const { value } = ev.target;
      setNomeItem(value);
    }

    const addItem = () => {
      setNomes([...nomes, nomeItem]);
      setPesos([...pesos, pesoItem]);
      setValores([...valores, valorItem]);
      setPesoItem(0);
      setValorItem(0);
      setNomeItem('');
    }
  
    return (
      <div className="button-space">
        <Button variant="outline-primary" onClick={handleShow}>
          Adicionar Item
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton >
            <Modal.Title>Adicionar Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className="label">Nome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nome do Item"
                  autoFocus
                  value={nomeItem}
                  onChange={onChangeNome}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="label">Preço</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Preço do Item em Reais"
                  value={valorItem}
                  onChange={onChangeValor}
                />
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label className="label">Volume (m³)</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Volume do item em m³"
                    value={pesoItem}
                    onChange={onChangePeso}
                  />
                </Form.Group>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={() => {addItem(); handleClose()}}>
              Confirmar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

  export default AddItem;