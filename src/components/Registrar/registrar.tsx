import React, { useEffect, useState } from "react";
import { Container, Form } from "../Login/styles";
import { useRouter } from "next/router";
import Link from "next/link";
import { toast } from 'react-toastify';
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

    const notificacaoConfigSuccess = {
        position: toast.POSITION.BOTTOM_RIGHT,
        type: toast.TYPE.SUCCESS,
        autoClose: 2500
    }

    const notificacaoConfigWarning = {
        position: toast.POSITION.BOTTOM_RIGHT,
        type: toast.TYPE.WARNING,
        autoClose: 2500
    }

    const notificacaoSuccess = (msg: string) => toast(msg, notificacaoConfigSuccess);
    const notificacaoWarning = (msg: string) => toast(msg, notificacaoConfigWarning);

    const handleRegistrar = async (e: React.FormEvent) => {
        e.preventDefault();
        const { username, password } = user;
        if(!username){
            notificacaoWarning("Usuário não informado!");
        } else if (!password){
            notificacaoWarning("Senha não informada!");
        } else {
            try {
                notificacaoSuccess("Usuário cadastrado com sucesso!");
                router.push("/login");
            } catch (err){
                console.log(err);
                notificacaoWarning("Não foi possível efetuar o login, tente novamente mais tarde!");                
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
                {notificacaoSuccess}
                {notificacaoWarning}
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