import { Card, Button } from 'react-bootstrap';
import React from 'react';

class ListeCarte extends React.Component {
    constructor() {
        super();
        this.cartes = [{titre:localStorage.getItem('cartesTitre'),texte:localStorage.getItem('cartesTexte')}];
    }
    render() {
        return (
            <div>
                {this.cartes.map(carte => (
                    <Card style={{ width: '18rem' }} key={carte.titre}>
                        <Card.Body>
                            <Card.Title>{carte.titre}</Card.Title>
                            <Card.Text>{carte.texte}</Card.Text>
                            <Button variant="primary">fini</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        )
    }
}
export default ListeCarte;