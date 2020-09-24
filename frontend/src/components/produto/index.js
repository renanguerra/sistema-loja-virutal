import React from 'react'
import {Link} from 'react-router-dom'

import './produto.css'

export default function ProdutoCard({id,img,name,description,price}){
    
    return(
        <div className='col-md-3 col-sm-12'>
            <img src={img} className='card-img-top img-cartao' alt='Foto do Produto'/>

            <div className='card-body'>   
                <h5>{name}</h5>
                <p className='card-text text-justify'>{description}</p>
                <p className='card-text text-right'>R$ {price}</p>    
            </div>

            <div className='row rodape-card d-flex align-items-center'>
                <div className='col-6'></div>

                <div className='col-6 text-right'>
                    <Link to={`/detalhes/${id}`} className='btn btn-sm btn-detalhes'>+ Detalhes</Link>    
                 </div>
            </div>
        </div>
    )
}