import { useState } from 'react';
import { FiSearch } from 'react-icons/fi'
import React from 'react';

import './Header.css';

import api from '../service/api.js';

export default ({})=>{

    const [input, setInput] = useState('')
    const [cep, setCep] = useState({});

    async function handleSearch() {
        //55385000/json/

        if(input === ''){
            alert("Preencha algum CEP!")
            return;
        }

        try{
            const response = await api.get(`${input}/json`)
            setCep(response.data)
            setInput("")
        }catch{
            alert("Algum erro aconteceu!")
            setInput("")
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

                {Object.keys(cep).length > 0 && (
                    <main className="main">
                        <h2>CEP: {cep.cep}</h2>

                        <span>{cep.logradouro}</span>
                        <span>{cep.bairro}</span>
                        <span>{cep.localidade}</span>
                        <span>{cep.localidade} - {cep.uf}</span>
                    </main>
                )}
            </div>
        </header>
    )
}