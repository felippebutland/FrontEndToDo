import React, { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import { AuthContext } from "../../context/AuthContext";

const Login = () => {

    const { register, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext);

    type SignInData = {
        usuario: string
    }

    async function handleSignIn(data: SignInData){
        console.log(data);
        if(!data.usuario){
            notificacaoErro("Usuário não informado!");
        } else {
            var retorno = await signIn(data);

            if(!retorno){
                notificacaoErro("Usuário não encontrado!");
            } else {
                notificacaoSucesso("Login realizado com sucesso!")
            }
        }            
    }

    const router = useRouter();

    const notificacaoError = {
        position: toast.POSITION.BOTTOM_RIGHT,
        type: toast.TYPE.WARNING,
        autoClose: 2500
    }
    const notificacaoSuccess = {
        position: toast.POSITION.BOTTOM_RIGHT,
        type: toast.TYPE.SUCCESS,
        autoClose: 2500
    }
    const notificacaoErro = (msg: string) => toast(msg, notificacaoError);
    const notificacaoSucesso = (msg: string) => toast(msg, notificacaoSuccess);

    toast.configure();
    return (
        <div className="background">
            <form className="form" onSubmit={handleSubmit(handleSignIn)}>
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
                    />
                </p>
                <br/>
                    <button className="buttonEntrar" type="submit">Entrar</button>
                <br/>
                <Link href="/registrar">
                    <button className="buttonCriarConta" type="button">
                        Criar conta    
                    </button>               
                </Link>
                <br/>
            </form>
        </div>
    );
}

export default Login;