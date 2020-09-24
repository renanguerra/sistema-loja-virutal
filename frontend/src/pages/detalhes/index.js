import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

import DetalhesProdutos from '../../components/detalhesprodutos/index'
import api from '../../config/api'

export default function Detalhes(){
    let { id } = useParams();
    
const [produtos, setProdutos] = useState([]);

useEffect(() => {
    api.get(`produtos/id/${id}`).then(response => {
        setProdutos(response.data);
        })
},[produtos]);

    return(
        <div>
        {produtos.map(produto => <DetalhesProdutos 
        id={produto.id} 
        img={produto.image} 
        name={produto.name}
        description={produto.description}
        price={produto.price} 
        userId={produto.user_id}
        />
        
        )}
        </div>
    )
}