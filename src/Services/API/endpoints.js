import api from "./api";


//USUARIOS
export async function GetUsuario () {
    const {data} = api.get(`/usuarios`);
    return data;
}
export async function CreateUsuario (body) {
    const {data} = api.post(`/usuarios`, body);
    return data;
}
export async function UpdateUsuario (id, body) {
    const {data} = api.put(`/usuarios/:${id}`, body);
    return data;
}
export async function DeleteUsuario (id) {
    const {data} = api.delete(`/usuarios/:${id}`);
    return data;
}


//SESSOES
export async function GetSessoes () {
    const {data} = api.get("/sessoes");
    return data;
}
export async function CreateSessoes (body) {
    const {data} = api.post(`/sessoes/:`, body);
    return data;
}
export async function DeleteSessoes (id) {
    const {data} = api.delete(`/sessoes/:${id}`);
    return data;
}


//LOGIN
export async function CreateAuth (body) {
    const {data} = api.post(`/login`, body);
    return data;
}