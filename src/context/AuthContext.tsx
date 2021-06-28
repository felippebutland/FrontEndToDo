import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";
import api from "../services/api";
import { setCookie ,parseCookies, destroyCookie } from "nookies";
import Router from "next/router";
import { getUserInformation, getUserSignIn } from "../services/UsuarioService";

type User = {
    id_usuario: Int16Array,
    nome: string;
}

type SignInData = {
    usuario: string;
}

type AuthContextType = {
    user: User | undefined;
    isAuthenticated: boolean;
    signIn: ({usuario}: SignInData) => Promise<boolean>;
    Logout: ({usuario}: SignInData) => Promise<void>
}


export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({children}) {
    const isAuthenticated = false;

    const [user, setUser] = useState<User>();

    useEffect(() => {
        const cookies = parseCookies();
        const token = cookies['next-token'];
        const nome = cookies['user'];

        if(token){
            getUserInformation(nome).then(response => {
                setUser(response.data[0])
            })
        }
    }, [])

    async function signIn({usuario}: SignInData) {
        const {token, user} = await getUserSignIn(usuario);

        if(!user || !token){
            return false;
        } else {
            setCookie(undefined, 'next-token', token, {maxAge: 3600/**1 hora*/});
            setCookie(undefined, 'user', user.map(x => x.nome)[0], {maxAge: 3600/**1 hora*/});

            api.defaults.headers['Authorization'] = `Bearer ${token}`;

            setUser(user[0]);
            Router.push('/home');
            return true;
        }
    }

    async function Logout(){
        
        console.log("Deslogando...")
        destroyCookie(undefined, 'next-token');
        destroyCookie(undefined, 'user');
        Router.push('/');        
    } 

    return (
        <AuthContext.Provider value = {{ user, isAuthenticated, signIn, Logout}}>
            {children}
        </AuthContext.Provider>
    );
}


