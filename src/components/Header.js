import { useState } from 'react';
import { FiSearch } from 'react-icons/fi'
import React from 'react';

import './Header.css';

export default ({})=>{

    const [input, setInput] = useState('')

    function handleSearch() {
        //55385000/json/

        if(input ===''){
            alert("Preencha algum CEP!")
            return;
        }
    }

    return(
        <header>
            <div className="container">
                
               <h1 className="title">Buscador de CEP</h1>
               <div className='containerInput'>
                    <input
                    type="text"
                    placeholder="Digite seu cep..."
                    value={input}
                    onChange={(event) => setInput(event.target.value) }
                    />

                    <button className="buttonSearch" onClick={handleSearch}>
                        <FiSearch size={25} color="#FFF"/>
                    </button>
                </div>

                <main className="main">
                    <h2>CEP: 55385-000</h2>
                    <span>Rua Miguel Gomes da Rocha</span>
                    <span>Complemento: Algu Complemento</span>
                    <span>Vila Rosa</span>
                    <span>Lajedo - PE</span>
                </main>
            </div>
        </header>
    )
}