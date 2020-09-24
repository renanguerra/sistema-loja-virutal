import React, {useState} from 'react';
import {Link} from 'react-router-dom'

import './home.css'

function Home() {
    const [name, setName] = useState('');

    return(
        <div className='text-center cont'>
            <h1>O que está procurando?</h1>

            <div className="d-flex justify-content-center">

                <div className="form-signin">
                    <input type='text' onChange={e => setName(e.target.value)} className='form-control form-control-lg ' placeholder='Procure algum produto, loja...'/>
                    <Link className='btn btn-primary mt-3' to={`/pesquisa/${name}` }>Pesquisar</Link>
                </div>


            </div>
        </div>
    )
}

export default Home;