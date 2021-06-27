import api from "./api";

type RegisterData = {
    usuario: string;
}

export async function verificarUsuarioExistente(data: RegisterData) {
    const response = await api.get(`/usuario/${data.usuario}`);
    console.log(response.data.data);
    if(!response.data.data.length){
        console.log('retornou false');
        return false;
    }
    console.log('retornou true');
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

