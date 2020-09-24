import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import api from '../../config/api'
import './login.css'

export default function Login() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault()
    

        try {
            const response = await api.post('/login',{email,password})

            localStorage.setItem('Id',response.data.id)
            localStorage.setItem('Name', response.data.name)
            localStorage.setItem('Phone', response.data.phone)
            localStorage.setItem('CPF', response.data.cpf)


            alert('logado')
            history.push('/home')
        }
        catch (err){
            alert('Erro no login, tente novamente!')
        }



    }

    return(
        <>
        <div class='text-center d-flex justify-content-center'>

            <form onSubmit={handleLogin} class="form-signin">

                <h1 class="h3 mb-3 font-weight-normal">Faça Login</h1>

                <label for="inputEmail" class="sr-only">Email</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} id="inputEmail" class="form-control" placeholder="Email" required autofocus/>
                
                <label for="inputPassword" class="sr-only">Senha</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} id="inputPassword" class="form-control mt-2" placeholder="Senha" required/>
                
                <div class="checkbox mb-3">
                    <label>
                    <input type="checkbox" value="remember-me"/> Mantenha Conectado
                    </label>
                </div>
                
                <button class="btn btn-lg btn-primary btn-block" type="submit">Entrar</button>
                
                <p class="mt-5 mb-3 text-muted ">&copy; 2017-2020</p>
            </form>
        </div>
        </>
    )
}