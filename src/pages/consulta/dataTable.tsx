import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { getDate } from "../../service/getDate"
import type { DateType } from "../../types/dateType"

function DateTable(){
    const [status, setStatus] = useState<DateType[]>([])
    const [date, setDate] = useState("")

    const fetchData = async (date: string) => {
        const formattedDate = date.replaceAll("-", "")
        try {
            const res = await getDate(formattedDate)
            setStatus(res.data.data)
        } catch (err) {
            toast.error("Não foi possível carregar os dados")
        }
    }

    useEffect(() => {
        const today = new Date().toISOString().split("T")[0]
        setDate(today)
        fetchData(today)
    }, [])
    
    return(
        <main>
            <section className="max-w-sm m-4">
                <input type="date" value={date} onChange={e => {setDate(e.target.value), fetchData(e.target.value)}} className="border border-gray-300 p-2 rounded"/>
            </section>

            <section className="flex justify-center border-1 rounded-4xl border-gray-300">
                  <table className="w-5xl text-left table-auto min-w-max">
                    <thead>
                        <tr>
                            <th className="p-4 border-b border-slate-300 bg-slate-50">
                                <p className="block text-sm font-normal leading-none text-slate-500">
                                    Local
                                </p>
                            </th>
                            <th className="p-4 border-b border-slate-300 bg-slate-50">
                                <p className="block text-sm font-normal leading-none text-slate-500">
                                    Casos
                                </p>
                            </th>
                            <th className="p-4 border-b border-slate-300 bg-slate-50">
                                <p className="block text-sm font-normal leading-none text-slate-500">
                                    Mortes
                                </p>
                            </th>
                            <th className="p-4 border-b border-slate-300 bg-slate-50">
                                <p className="block text-sm font-normal leading-none text-slate-500">
                                    Suspeitos/Recuperados
                                </p>
                            </th>
                            <th className="p-4 border-b border-slate-300 bg-slate-50">
                                <p className="block text-sm font-normal leading-none text-slate-500">
                                    Data
                                </p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {status.length === 0 ? (    
                        <tr>
                            <td colSpan={5} className="text-center p-4 font-bold">Nenhum dado encontrado para esta data</td>
                        </tr>
                        ) : status.map(items => (
                        <tr className="hover:bg-slate-50" key={items.uid}>
                            <td className="p-4 border-b border-slate-200">
                                <p className="block text-sm text-slate-800">
                                    {items.uf}
                                </p>
                            </td>
                            <td className="p-4 border-b border-slate-200">
                                <p className="block text-sm text-slate-800">
                                    {items.cases}
                                </p>
                            </td>
                            <td className="p-4 border-b border-slate-200">
                                <p className="block text-sm text-slate-800">
                                    {items.deaths}
                                </p>
                            </td>
                            <td className="p-4 border-b border-slate-200">
                                <p className="block text-sm text-slate-800">
                                    {items.suspects}
                                </p>
                            </td>
                             <td className="p-4 border-b border-slate-200">
                                <p className="block text-sm text-slate-800">
                                    {new Date(items.datetime).toLocaleDateString("pt-br") }
                                </p>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </main>
    )
}

export default DateTable