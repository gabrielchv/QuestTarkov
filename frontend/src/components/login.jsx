import React from 'react';

function Login(){

    let [username, setUsername] = React.useState('');
    let [password, setPassword] = React.useState('');
    
    async function postData(){
        const response = await fetch('/api/post', {
            method: "POST",
            body: JSON.stringify({
                username: username,
                password: password
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        const data = await response.text()
        console.log(data);
    }

    function usernameType(event){
        if (event.target.name == "username"){
            setUsername(event.target.value)
        }
        if (event.target.name == "password"){
            setPassword(event.target.value)
        }   
    }

    function loginButton(){
            fetch('/api/login', {
                method: "POST",
                body: JSON.stringify({
                    username: username,
                    password: password
                }),
                headers: {
                    'Content-type': 'application/json'
                }
            })
    }

    return (
        <div className="container">
            <div className="m-auto text-center loginForm">
                <h2>Olá {username}<span className='blink'>_</span></h2>
                <div className="input-group mb-2">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1"><i class="icon fa-solid fa-user"></i></span>
                </div>
                    <input onChange={usernameType} name="username" type="text" className="form-control" placeholder="Usuário" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-2">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1"><i class="icon fa-solid fa-key"></i></span>
                </div>
                    <input onChange={usernameType} type="password" name="password" className="form-control" placeholder="Senha" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <button className="btn btn-lg btn-outline-secondary btn-block">Registrar</button>
                <button onClick={loginButton} className="btn btn-lg btn-outline-success btn-block">Entrar</button>
            </div>
        </div>
    )
}

export default Login
