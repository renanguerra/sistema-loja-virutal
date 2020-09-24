import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import api from '../../config/api'
import './cadastro.css'

export default function Cadastro() {
    const [name,setName] = useState('');
    const [cpf,setCpf] = useState('');
    const [phone,setPhone] = useState('');
    const [email,setEmail] = useState('');
    const [emailcon,setEmailcon] = useState(''); //Variavel para confirmar o email
    const [password,setPassword] = useState('');
    const [passwordcon,setPasswordcon] = useState(''); //Variavel para confirmar a senha

    const history = useHistory();

    async function handleCadastro(e){
        e.preventDefault()
    
        if (password === passwordcon && email === emailcon) {
            try {
                await api.post('/cadastro',{name, email, password, phone, cpf})
    
                //localStorage.setItem('Id',response.data.id)
                //localStorage.setItem('Name', response.data.name)
    
                alert('Usuario criado com sucesso')
                history.push('/login')
            }
            catch (err){
                alert('Erro no cadastro, tente novamente!')
            }
        } else {
            alert('Email ou senha não coincidem!')
        }

    
    }
    


    
    return(
        <div id="main" className="container-fluid text-center main">
            
        <h3 className="page-header">Cadastrar Usuario</h3>
        <div className='container'>

            <form>
                <div className="row align justify-content-md-center">
                    <div className="form-group col-md-6">
                        <label for="exampleInputEmail1">Nome Completo</label>
                        <input type="text" value={name} onChange={e => setName(e.target.value)} className="form-control" placeholder="Digite seu nome completo" required autofocus/>
                    </div>
                </div>

                <div className="row justify-content-md-center">
                    <div className="form-group col-md-3">
                        <label for="exampleInputEmail1">CPF</label>
                        <input type="text" value={cpf} onChange={e => setCpf(e.target.value)} className="form-control" placeholder="Digite seu CPF" required autofocus/>
                    </div>
                    <div className="form-group col-md-3">
                        <label for="exampleInputEmail1">Telefone</label>
                        <input type="text" value={phone} onChange={e => setPhone(e.target.value)} className="form-control" placeholder="Digite seu telefone"/>
                    </div>
                </div>

                <div className="row align justify-content-md-center">

                <div className="form-group col-md-3">
                        <label for="exampleInputEmail1">Email</label>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control" placeholder="Digite seu email" required autofocus/>
                    </div>
                    <div className="form-group col-md-3">
                        <label for="exampleInputEmail1">Confirmar Email</label>
                        <input type="email" value={emailcon} onChange={e => setEmailcon(e.target.value)} className="form-control" placeholder="Digite novamente seu email" required autofocus/>
                    </div>
                </div>
                
                <div className="row justify-content-md-center">
                    <div className="form-group col-md-3 ">
                        <label for="exampleInputEmail1">Senha</label>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" placeholder="Digite sua senha" required autofocus/>
                    </div>
                    <div className="form-group col-md-3">
                        <label for="exampleInputEmail1">Confirmar Senha</label>
                        <input type="password" value={passwordcon} onChange={e => setPasswordcon(e.target.value)} className="form-control" placeholder="Digite sua senha novamente" required autofocus/>
                    </div>
                </div>


                <div className="row justify-content-md-center">
                    <div className="form-group col-md-4">
                        <label for="exampleInputEmail1">Endereço</label>
                        <input type="text" className="form-control" placeholder="Digite seu endereço" required autofocus/>
                    </div>
                    <div className="form-group col-md-2">
                        <label for="exampleInputEmail1">Número</label>
                        <input type="text" className="form-control" placeholder="Digite o número" required autofocus/>
                    </div>
                </div>
                
                <div className="row justify-content-md-center">
                    <div className="form-group col-md-2">
                        <label for="exampleInputEmail1">CEP</label>
                        <input type="email" className="form-control" placeholder="Digite seu CEP" required autofocus/>
                    </div>
                    <div className="form-group col-md-4">
                        <label for="exampleInputEmail1">Complemento</label>
                        <input type="email" className="form-control" placeholder="Complemento" required autofocus/>
                    </div>
                </div>
                
                <hr />
                
                <div className="row">
                <div className="col-md-12">
                    <button type="submit" onClick={handleCadastro} className="btn btn-primary mr-3">Salvar</button>
                    <a href="/login" className="btn btn-danger">Cancelar</a>
                </div>
                </div>

            </form>
        </div>
        </div>

    )
}