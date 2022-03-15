import { Form } from 'react-bootstrap';
import React, { useState } from 'react';
import { useNavigate } from "react-router";


const AddCarte = () => {

    const navigate = useNavigate();
    const[titre,setTitre] = useState();
    const[texte,setTexte] = useState();

    function handleChangeTitre(data) {
        setTitre(data.target.value);
    }
    function handleChangeTexte(data) {
        setTexte(data.target.value);
    }

    function handleSubmit(event) {
        console.log(titre);
        console.log(titre);
        localStorage.setItem('cartesTitre', titre);
        localStorage.setItem('cartesTexte', texte);
        navigate("../ListeCarte");
    }

        return (
            <div className="App">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formTitre">
                        <Form.Label>titre</Form.Label>
                        <Form.Control
                            type="input"
                            placeholder="titre"
                            name="titre"
                            onChange={handleChangeTitre} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formTexte">
                        <Form.Label>texte</Form.Label>
                        <Form.Control
                            type="input"
                            placeholder="texte"
                            name="texte"
                            onChange={handleChangeTexte} />
                    </Form.Group>
                    <input type="submit"/>
                </Form>
            </div>
        );
    }
export default AddCarte;