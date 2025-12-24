import { useEffect, useState } from "react"
import type { StatusType } from "../../types/stateStatus"
import { getStado } from "../../service/getStado"
import toast from "react-hot-toast"

function Estado(){
    const [status, setStatus] = useState<StatusType[]>([])
    const [selectedUf, setSelectedUf] = useState("todos")

    const filteredStatus = status.filter(item => {
        const matchUf = selectedUf === "todos" || item.uf === selectedUf
        return matchUf
    })

    useEffect(() => {
        getStado()
        .then(res => {setStatus(res.data.data)})
        .catch(res => toast.error("Não foi possivel carregar os dados"))
    }, [])
    
    return(
        <main>
            <section className="max-w-sm m-4">
                <select className="block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" value={selectedUf} onChange={e => setSelectedUf(e.target.value)}>
                    <option value="todos">Todos</option>
                    {status.map(item => (
                        <option key={item.uid} value={item.uf}>{item.uf}</option>
                    ))}
                </select>
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
                        </tr>
                    </thead>
                    <tbody>
                        {filteredStatus.map(items => (
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
                                    {items.suspects || "-"}
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

export default Estado