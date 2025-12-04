import { request } from "../utils/axios"

export const getAllCookieProducts = () => {
   return request({method:"get", url:"/cookie"})
}