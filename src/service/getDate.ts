import type { DateType } from "../types/dateType"
import { API } from "../utils/api"

export function getDate(datetime: string){
    return API.get<{data:DateType[]}>(`/brazil/${datetime}`)
}