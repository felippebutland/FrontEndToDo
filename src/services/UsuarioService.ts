import api from "./api";

type RegisterData = {
    usuario: string;
}

export async function verificarUsuarioExistente(data: RegisterData) {
    const response = await api.get(`/usuario/${data.usuario}`);
    console.log(response.data.data);
    if(!response.data.data.length){
        return false;
    }
    return true;
}

export async function registerUser(data: RegisterData){
    var params = new URLSearchParams();
    params.append('nome', data.usuario);

    const response = await api.post(`/usuario/`, params);
    return {
        user: response.data.data
    }
}

export async function getUserInformation(usuario: string){

    const response = await api.get(`/usuario/${usuario}`);
    return {
        data: response.data.data
    }
}

export async function getUserSignIn(usuario: string) {
    const response = await api.get(`/usuario/${usuario}`);
    return {
        token: response.data.token,
        user: response.data.data
    }
}

