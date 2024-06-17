import { api } from "./api"

export function GetContent(){
    async function getContentUser(): Promise<any> {
        try {
            const response = await api().post("users");
            return response;
        } catch (error) {
            return Promise.reject(error)
        }
    }

    return { getContentUser }
}