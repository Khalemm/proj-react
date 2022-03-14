import { Form } from 'react-bootstrap';
import React from 'react';


class AddCarte extends React.Component {

    constructor() {
        super();
        this.handleChangeTitre = this.handleChangeTitre.bind(this);
        this.handleChangeTexte = this.handleChangeTexte.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.carte = { titre:"", texte:""}
    }

    handleChangeTitre(data) {
        this.carte.titre = data.target.value;
    }
    handleChangeTexte(data) {
        this.carte.texte = data.target.value;
    }

    handleSubmit(event) {
        console.log(this.carte);
        localStorage.setItem('cartesTitre', this.carte.titre);
        localStorage.setItem('cartesTexte', this.carte.texte);
    }
    render() {
        return (
            <div className="App">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formTitre">
                        <Form.Label>titre</Form.Label>
                        <Form.Control
                            type="input"
                            placeholder="titre"
                            name="titre"
                            onChange={this.handleChangeTitre} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formTexte">
                        <Form.Label>texte</Form.Label>
                        <Form.Control
                            type="input"
                            placeholder="texte"
                            name="texte"
                            onChange={this.handleChangeTexte} />
                    </Form.Group>
                    <input type="submit"/>
                </Form>
            </div>
        );
    }
}
export default AddCarte;