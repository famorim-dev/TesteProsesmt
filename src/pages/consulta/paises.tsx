import { useEffect, useState } from "react"
import type { PaisesType } from "../../types/paisesTypes"
import { getPaises } from "../../service/getPaises"
import toast from "react-hot-toast"

function Paises(){
    const [status, setStatus] = useState<PaisesType[]>([])

    useEffect(() => {
        getPaises()
        .then(res => setStatus(res.data.data))
        .catch((_err) => {toast.error("Não foi possivel carregar os dados")})
    },[])

    return (
        <main>
            <section className="flex justify-center border-1 rounded-4xl border-gray-300">
                <table className="w-5xl text-left table-auto min-w-max">
                    <thead>
                        <tr>
                            <th className="p-4 border-b border-slate-300 bg-slate-50">
                                <p className="block text-sm font-normal leading-none text-slate-500">
                                    Paises
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
                                    Confirmados
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
                                    {items.country}
                                </p>
                            </td>
                            <td className="p-4 border-b border-slate-200">
                                <p className="block text-sm text-slate-800">
                                    {items.cases || "-"}
                                </p>
                            </td>
                            <td className="p-4 border-b border-slate-200">
                                <p className="block text-sm text-slate-800">
                                    {items.deaths}
                                </p>
                            </td>
                            <td className="p-4 border-b border-slate-200">
                                <p className="block text-sm text-slate-800">
                                    {items.confirmed}
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

export default Paises