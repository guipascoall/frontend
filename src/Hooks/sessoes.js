import {useQuery, useMutation} from "@tanstack/react-query";
import { GetSessoes, CreateSessoes,  DeleteSessoes } from "../Services/API/endpoints";


export function useGetSessoes({
    onSuccess = ()=> {}, 
    onError = () => {}, 
} = {}) {
    return useQuery({
        queryKey:["sessoes"], 
        queryFn: GetSessoes, 
        onSuccess, 
        onError,
    });
};

export function useCreateSessoes({
    onSuccess = ()=> {}, 
    onError = () => {}, 
} = {} ) {
    return useMutation({mutationFn: CreateSessoes, onSuccess, onError});
};

export function useDeleteSessoes({
    onSuccess = ()=> {}, 
    onError = () => {}, 
} = {} ) {
    return useMutation({mutationFn: DeleteSessoes, onSuccess, onError});
};