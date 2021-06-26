import React, { useContext, useEffect, useState } from "react";
import { getToken, login, logout } from "../../services/auth";
import { Container, Form } from "./styles";
import { useRouter } from "next/router";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import { AuthContext } from "../../context/AuthContext";

type User = {
    username: string,
    password: string
}

const Login = () => {

    const { register, handleSubmit } = useForm();
    const { SignIn } = useContext(AuthContext);

    async function handleSignIn(data){
        await SignIn(data);
    }

    const [user, setUser] = useState<User>({
        username: '',
        password: ''
    });
    const router = useRouter();

    const notificacaoConfig = {
        position: toast.POSITION.BOTTOM_RIGHT,
        type: toast.TYPE.WARNING,
        autoClose: 2500
    }
    const notificacao = (msg: string) => toast(msg, notificacaoConfig);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        const { username, password } = user;
        if(!username){
            notificacao("Usuário não informado!");
        } else if (!password){
            notificacao("Senha não informada!");
        } else {
            try {
                login("fsaff");
                router.push("/home");
            } catch (err){
                console.log(err);
                notificacao("Não foi possível efetuar o login, tente novamente mais tarde!");                
            }
        }        
    };
    //<Form className="form" onSubmit={handleLogin}>
    toast.configure();
    return (
        <Container className="container">
            <Form className="form" onSubmit={handleSubmit(handleSignIn)}>
                <br>
                </br>
                <p className="p">
                    Bem vindo(a) ao sistema sem nome!
                </p>
                <p className="p">
                    <input 
                        {...register('usuario')}
                        className="input"
                        name="usuario"
                        type="text" 
                        placeholder="Usuário" 
                        onChange={
                            e => setUser({...user, username: e.target.value})
                        }
                    />
                </p>
                <p className="p">
                    <input 
                        {...register('senha')}
                        className="input" 
                        name="senha"
                        type="password" 
                        placeholder="Senha" 
                        onChange={
                            e => setUser({...user, password: e.target.value})
                        }
                    />
                </p>
                {notificacao}
                <br/>
                    <button className="buttonEntrar" type="submit">Entrar</button>
                <br/>
                <Link href="/registrar">
                    <button className="buttonCriarConta" type="button">
                        Criar conta    
                    </button>               
                </Link>
                <br/>
            </Form>
        </Container>
    );
}

export default Login;