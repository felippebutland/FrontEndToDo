import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";
import api from "../services/api";
import { setCookie } from "nookies";
import Router from "next/router";

type User = {
    id_usuario: Int16Array,
    nome: string;
}

type SignInData = {
    nome: string;
}

type AuthContextType = {
    user: User | undefined;
    isAuthenticated: boolean;
    SignIn: ({nome}: SignInData) => Promise<void>;
}


export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({children}) {
    const isAuthenticated = false;

    const [user, setUser] = useState<User>();
    //useEffect(() => {
    //    api.get('/').then(response => {
    //        setUser(response.data.data);
    //    })
    //}, []);

    async function getUser(username: string) {
        const response = await api.get(`/usuario/${username}`);
        return {
            token: response.data.token,
            user: response.data.data
        }
    }

    async function signIn({nome}: SignInData) {
        const {token, user} = await getUser(nome);
        
        setCookie(undefined, 'next-token', token, {maxAge: 3600/**1 hora*/});
        setUser(user);
        Router.push('/home');
    }

    return (
        <AuthContext.Provider value = {{ user, isAuthenticated, signIn}}>
            {children}
        </AuthContext.Provider>
    );
}

