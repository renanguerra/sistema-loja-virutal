import React, {useState,useEffect} from 'react'
import api from '../../config/api'

import './crud.css'

import TableCrud from '../../components/tablecrud/index'

export default function CRUD(){
    const [lojas, setLojas] = useState([])
    const [name,setName] = useState('')
    const [phone,setPhone] = useState('')
    const [cnpj,setCNPJ] = useState('')
    const [image,setImage] = useState('')
    const [idEstabelecimento,setIdEstabelecimento] = useState('')
    const [description,setDescription] = useState('')
    const [price,setPrice] = useState('')


    useEffect(() => {
        api.get(`/users/all`).then(response => {
            const data = response.data
            setLojas(data)
            })
    },[]);


    async function criarEstabelecimento(e){
        e.preventDefault()
            try {
                await api.post('/cadastro',{name, phone, cnpj, image})
    
    
                alert('Usuario criado com sucesso')
                window.location.reload(false);
            }
            catch (err){
                alert('Erro no cadastro, tente novamente!')
            }
        }

        async function criarProduto(e){
            e.preventDefault()

                try {
                    await api.post(`/users/${idEstabelecimento}/produtos/create`,{name,
                        description,
                        price,
                        image})
        
        
                    alert('Produto criado com sucesso')
                    window.location.reload(false);
                }
                catch (err){
                    alert('Erro no cadastro, tente novamente!')
                }
            }
            

    
    return(
        <div>
            <div className="container-lg">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-8"><h2>CRUD estabelecimentos</h2>
                                </div>
                            </div>
                        </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>CNPJ</th>
                        <th>Imagem</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {lojas.map(loja => <TableCrud 
                    id={loja.id} 
                    nome={loja.name} 
                    telefone={loja.phone} 
                    cnpj={loja.cnpj} 
                    img={loja.image}
                    />)}
                </tbody>
            </table>
        </div>
    </div>
</div>     

<div className='container-lg'>
    <h1>Criar estabelecimento</h1>

    <form className=''>
        <p>
            <label>Nome Completo: </label>
            <input onChange={e => setName(e.target.value)} placeholder='Nome' type='text' required/>
        </p>
        <p>
            <label>Telefone: </label>
            <input onChange={e => setPhone(e.target.value)} id='phone' placeholder='Telefone' type='text' required/>
        </p>
        <p>
            <label>CNPJ:</label>
            <input onChange={e => setCNPJ(e.target.value)} id='cnpj' placeholder='CNPJ' type='text' required/>
        </p>
        <p>
            <label>URL da imagem</label>
            <input onChange={e => setImage(e.target.value)} id='image' placeholder='Imagem (URL)' type='text' required/>
        </p>
        <p>
        <button type="submit" onClick={criarEstabelecimento} className="btn btn-primary mr-3">Salvar</button>
        </p>
    </form>
</div>

<div className='container-lg'>
    <h1>Criar Produto</h1>

    <form className=''>
        <p>
            <label>Id do estabelecimento: </label>
            <input onChange={e => setIdEstabelecimento(e.target.value)} placeholder='Id' type='text' required/>
        </p>
        <p>
            <label>Nome Produto: </label>
            <input onChange={e => setName(e.target.value)} placeholder='Nome' type='text' required/>
        </p>
        <p>
            <label>Descrição: </label>
            <input onChange={e => setDescription(e.target.value)} placeholder='Descrição' type='text' required/>
        </p>
        <p>
            <label>Valor:</label>
            <input onChange={e => setPrice(e.target.value)}  placeholder='Valor' type='text' required/>
        </p>
        <p>
            <label>URL da imagem</label>
            <input onChange={e => setImage(e.target.value)} id='image' placeholder='Imagem (URL)' type='text' required/>
        </p>
        <p>
        <button type="submit" onClick={criarProduto} className="btn btn-primary mr-3">Salvar</button>
        </p>
    </form>
</div>

</div>
    )
}