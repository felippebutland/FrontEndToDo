import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";
import api from "../services/api";
import { setCookie ,parseCookies } from "nookies";
import Router from "next/router";

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
}


export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({children}) {
    const isAuthenticated = false;

    const [user, setUser] = useState<User>();

    useEffect(() => {
        const cookies = parseCookies();
        const token = cookies['nextauth.token'];

        if(token){

        }

    }, [])

    async function getUser(username: string) {
        const response = await api.get(`/usuario/${username}`);
        return {
            token: response.data.token,
            user: response.data.data
        }
    }

    async function signIn({usuario}: SignInData) {
        const {token, user} = await getUser(usuario);

        if(!user || !token){
            return false;
        } else {
            setCookie(undefined, 'next-token', token, {maxAge: 3600/**1 hora*/});
            setCookie(undefined, 'user', user.map(x => x.nome)[0], {maxAge: 3600/**1 hora*/});
            setUser(user);
            Router.push('/home');
            return true;
        }
    }

    return (
        <AuthContext.Provider value = {{ user, isAuthenticated, signIn}}>
            {children}
        </AuthContext.Provider>
    );
}

