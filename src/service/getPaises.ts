import type { PaisesType } from "../types/paisesTypes"
import { API } from "../utils/api"

export function getPaises(){
    console.log(API.get<{data:PaisesType[]}>("/countries"))
    return API.get<{data:PaisesType[]}>("/countries")
}