import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'

import ProdutoCard from '../../components/produto/index'
import api from '../../config/api'

export default function Perfil() {
    let { name } = useParams();

const [produtos, setProdutos] = useState([]);


useEffect(() => {
    api.get(`produtos/name/${name}`).then(response => {
        setProdutos(response.data);
        })
},[]);

    return(
        <>
        <h1>Esses são os resultados para sua busca por {name}</h1>
        <div className="row container">
        {produtos.map(produto => <ProdutoCard 
        id={produto.id} 
        img={produto.image} 
        name={produto.name}
        description={produto.description}
        price={produto.price} 
        />
        
        )}
        
        </div>
        
        </>
    )
}