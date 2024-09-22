import call from '@/tools/axios'
import GetConfig from "@/types/get-config";

const api = {
    get: ({ url, params }: GetConfig)=> {
        return call({ url, method: 'get', params })
    }
}

export default api;
