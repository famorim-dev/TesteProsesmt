import type { StatusType } from "../types/stateStatus"
import { API } from "../utils/api"

export function getStado(){
    return API.get<{data:StatusType[]}>("/")
}