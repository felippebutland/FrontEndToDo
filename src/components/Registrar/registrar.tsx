import React, { useEffect, useState } from "react";
import { getToken, login, logout } from "../../auth";
import { Container, Form } from "../Login/styles";
import { useRouter } from "next/router";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type User = {
    username: string,
    password: string
}

const Registrar = () => {

    const [user, setUser] = useState<User>({
        username: '',
        password: ''
    });
    const router = useRouter();

    const notificacaoConfig = {
        position: toast.POSITION.BOTTOM_RIGHT,
        type: toast.TYPE.SUCCESS,
        autoClose: 2500
    }
    const notificacao = (msg: string) => toast(msg, notificacaoConfig);

    const handleRegistrar = async (e: React.FormEvent) => {
        e.preventDefault();
        const { username, password } = user;
        if(!username){
            notificacao("Usuário não informado!");
        } else if (!password){
            notificacao("Senha não informada!");
        } else {
            try {
                notificacao("Usuário cadastrado com sucesso!");
                router.push("/login");
            } catch (err){
                console.log(err);
                notificacao("Não foi possível efetuar o login, tente novamente mais tarde!");                
            }
        }        
    };

    toast.configure();
    return (
        <Container className="container">
            <Form className="form" onSubmit={handleRegistrar}>
                <br>
                </br>
                <p className="p">
                    Criar usuário
                </p>
                <p className="p">
                    <input className="input" type="text" placeholder="Usuário" onChange={
                        e => setUser({...user, username: e.target.value})
                    }/>
                </p>
                <p className="p">
                    <input className="input" type="password" placeholder="Senha" onChange={
                        e => setUser({...user, password: e.target.value})}
                    />
                </p>
                {notificacao}
                <br/>
                    <button className="buttonRegistrar" type="submit">Registrar</button>
                <br/>
                <Link href="/login">
                    <button className="buttonVoltar" type="button">
                        Voltar para o Login   
                    </button>               
                </Link>
                <br/>
            </Form>
        </Container>
    );
}

export default Registrar;