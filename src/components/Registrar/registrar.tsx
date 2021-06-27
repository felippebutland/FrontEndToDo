import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import { registerUser, verificarUsuarioExistente } from "../../services/UsuarioService";
import * as FaIcons from "react-icons/fa";

type User = {
    username: string,
    password: string
}

const Registrar = () => {

    const { register, handleSubmit } = useForm();

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

    type RegisterData = {
        usuario: string
    }

    async function registrarUsuario(data: RegisterData){
        console.log(data);
        if(!data.usuario){
            notificacaoWarning("Usuário não informado!");
        } else {
            var usuarioExiste = await verificarUsuarioExistente(data);
            if(usuarioExiste){
                notificacaoWarning("Usuário já existe!");
            } else {
                var retorno = await registerUser(data);

                if(!retorno){
                    notificacaoWarning("Ocorreu um erro durante a requisição, tente novamente mais tarde.");
                } else {
                    notificacaoSuccess("Usuário registrado com sucesso!")
                    router.push("/login");
                }
            }
            
        }      
    }

    toast.configure();
    return (
        <div className="background">
            <form className="form" onSubmit={handleSubmit(registrarUsuario)}>
                <br>
                </br>
                <p className="p">
                    Criar usuário
                </p>
                <p className="p">
                    <input
                        {...register('usuario')} 
                        className="input" 
                        type="text" 
                        placeholder="Usuário"
                    />
                </p>
                <br/>
                    <button className="buttonRegistrar" type="submit">Registrar</button>
                <br/>
                <Link href="/login">
                    <button className="buttonVoltar" type="button">
                        <FaIcons.FaArrowLeft />
                        &nbsp; Voltar para o Login   
                    </button>               
                </Link>
                <br/>
            </form>
        </div>
    );
}

export default Registrar;