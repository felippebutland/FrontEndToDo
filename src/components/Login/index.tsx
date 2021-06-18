import React, { useEffect, useState } from "react";
import { getToken, login, logout } from "../../auth";
import { Container, Form } from "./styles";
import { useRouter } from "next/router";
import Link from "next/link";

type Error = {
    error?: string;
}

type User = {
    username: string,
    password: string
}

const Login = () => {

    const [error, setError] = useState<Error>();
    const [user, setUser] = useState<User>({
        username: '',
        password: ''
    });
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        const { username, password } = user;
        if(!username){
            setError({
                error: "Usuário não informado!"
            });
        } else if (!password){
            setError({
                error: "Senha não informada!"
            });
        } else {
            try {
                login("fsaff");
                router.push("/home");
            } catch (err){
                console.log(err);
                setError({
                    error: "Não foi possível efetuar o login, tente novamente mais tarde!"
                });
            }
        }
    };

    //useEffect(() => {}, []);

    return (
        <Container>
            <Form onSubmit={handleLogin}>
                <p>
                    Usuário:
                    <input type="text" onChange={
                        e => setUser({...user, username: e.target.value})
                    }/>
                </p>
                <p>
                    Senha:
                    <input type="password" onChange={e => setUser({...user, password: e.target.value})}/>
                </p>
                <p>
                    {error?.error}
                </p>
                <br/>
                    <button type="submit">Entrar</button>
                <br/>

                <Link href="/registrar">Criar conta</Link>
            </Form>
        </Container>
    );
}

export default Login;