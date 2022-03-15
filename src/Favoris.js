import React from 'react';



function Favoris(){
    return (
        <div className="App">
            {getFavoris()}
        </div>
    );
}

const getFavoris = () => {
    let content = [];
    for (let a in localStorage){
      content.push(<div key={a}>{localStorage.getItem(a)} 
      </div> )
    }
    return content
} 
export default Favoris;