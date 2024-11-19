import {useQuery, useMutation} from "@tanstack/react-query";
import { GetUsuario, CreateUsuario, UpdateUsuario, DeleteUsuario } from "../Services/API/endpoints";


export function useGetUsuario({
    onSuccess = ()=> {}, 
    onError = () => {}, 
} = {}) {
    return useQuery({
        queryKey:["usuarios"], 
        queryFn: GetUsuario, 
        onSuccess, 
        onError,
    });
}

export function useCreateUsuario({
    onSuccess = ()=> {}, 
    onError = () => {}, 
} = {} ) {
    return useMutation({mutationFn: CreateUsuario, onSuccess, onError});
}

export function useUpdateUsuario({
    onSuccess = ()=> {}, 
    onError = () => {}, 
} = {} ) {
    return useMutation({mutationFn: UpdateUsuario, onSuccess, onError});
}

export function useDeleteUsuario({
    onSuccess = ()=> {}, 
    onError = () => {}, 
} = {} ) {
    return useMutation({mutationFn: DeleteUsuario, onSuccess, onError});
}