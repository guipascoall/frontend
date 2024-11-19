import {useMutation} from "@tanstack/react-query";
import { CreateAuth } from "../Services/API/endpoints";

export function useCreateAuth({
    onSuccess = ()=> {}, 
    onError = () => {}, 
} = {} ) {
    return useMutation({mutationFn: CreateAuth, onSuccess, onError});
};