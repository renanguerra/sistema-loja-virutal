import React from 'react'
import {Link} from 'react-router-dom'


import './detalhes.css'

export default function DetalhesProduto({id,img,name,description,price,userId}){

    
    return(
        <div className='container' >

            <div className='row d-flex justify-content-center'>
                <div className='col-sm 8'>
                    <img src={img} className='' alt='Imagem do produto'/>
                </div>
            

                <div className='col-sm-5'>
                    <h4>{name}</h4>

                    <p >{description}</p>
                    <h2>R$ {price}</h2>

                    <p>
                        <Link className=''>Comprar</Link>
                        <Link className='mt-3 ml-3' to={`/estabelecimento/${userId}`}>Ver mais produtos do vendedor</Link>
                    </p>
                </div>
               
            </div>            
        </div>
    )
}