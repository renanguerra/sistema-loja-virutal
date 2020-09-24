import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'

import ProdutoCard from '../../components/produto/index'
import api from '../../config/api'

export default function Loja() {
    let { id } = useParams();

const [produtos, setProdutos] = useState([]);
const [nome, setNome] = useState();
const [phone, setPhone] = useState();
const [cnpj, setCnpj] = useState();


useEffect(() => {
    api.get(`/users/${id}/produtos`).then(response => {
        const data = response.data.produtos
        setProdutos(data)
        })
},[]);

useEffect(() => {
    api.get(`/users/${id}/produtos`).then(response => {
        const nome = response.data.name
        const phone = response.data.phone
        const cnpj = response.data.cnpj
        setNome(nome)
        setPhone(phone)
        setCnpj(cnpj)
        })
},[]);


    return(
        <>
        <h1>{nome}</h1>
        <h3>Telefone: {phone}</h3>
        <h3>CNPJ: {cnpj}</h3>

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