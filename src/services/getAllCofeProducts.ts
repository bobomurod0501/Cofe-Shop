import { request } from "../utils/axios"

export const getAllCofeProducts = () => {
   return request({method:"get", url:"/cofe"})
}