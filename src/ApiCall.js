
import React from 'react';

export function GetUser() {
    fetch("https://anilistmikilior1v1.p.rapidapi.com/getUser", {
        "method": "POST",
        "headers": {
            "content-type": "application/x-www-form-urlencoded",
            "x-rapidapi-host": "Anilistmikilior1V1.p.rapidapi.com",
            "x-rapidapi-key": "bd70cf8008msheaeff67f7f17b55p1c2999jsna8efb7960695"
        },
        "body": {
            "accessToken": "T0y3cOAUQIamXzwq4NMi3TNICPRGVnStsmZvKrLB"
        }
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    });
    //return await response.json();
}

class ApiCall extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
      }

    render() {
        return (
            <div className="App">
                <GetUser/>
            </div>
        );
    }
}
export default ApiCall;