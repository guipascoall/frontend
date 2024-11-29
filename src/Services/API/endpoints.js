import api from "./api";


//USUARIOS
export async function GetUsuario () {
    const {data} = await api.get(`/usuarios`);
    return data;
}
export async function CreateUsuario (body) {
    const {data} = await api.post(`/usuarios`, body);
    console.log(data);
    return data;
}
export async function UpdateUsuario (id, body) {
    const {data} = await api.put(`/usuarios/:${id}`, body);
    return data;
}
export async function DeleteUsuario (id) {
    const {data} = await api.delete(`/usuarios/:${id}`);
    return data;
}


//SESSOES
export async function GetSessoes () {
    const {data} = await api.get("/sessoes");
    return data;
}
export async function CreateSessoes (body) {
    const {data} = await api.post(`/sessoes/:`, body);
    return data;
}
export async function DeleteSessoes (id) {
    const {data} = await api.delete(`/sessoes/:${id}`);
    return data;
}


//LOGIN
export async function CreateAuth (body) {
    const {data} = await api.post(`/login`, body);
    return data;
}