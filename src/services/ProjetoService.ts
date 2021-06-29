import api from "./api";
import {parseCookies} from "nookies";

type RegisterData = {
    titulo: string;
    descricao: string;
    data_inicio: string;
    data_fim: string;
    id_criador: string;
    id_sistema: string    
}

export async function registerProjeto(data: RegisterData){
    var params = new URLSearchParams();
    params.append('titulo', data.titulo);
    params.append('descricao', data.descricao);
    params.append('data_inicio', data.data_inicio);
    params.append('data_fim', data.data_fim);
    if(!data.id_criador){
        const cookies = parseCookies();
        data.id_criador = cookies['user']
    }
    params.append('id_criador', data.id_criador);
    params.append('id_sistema', data.id_sistema);

    const response = await api.post(`/projeto/`, params);
    return {
        user: response.data.data
    }
}