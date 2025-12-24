import { useState } from "react"
import toast from "react-hot-toast"


function Formulario(){
    const [estado, setEstado] = useState("")
    const [casos, setCasos] = useState("")
    const [confirmados, setConfirmados] = useState("")
    const [mortos, setMortos] = useState("")
    const [recuperados, setRecuperados] = useState("")
    const [data, setData] = useState("")

    const handleEnviar = (eventoForm: React.FormEvent) => {
        eventoForm.preventDefault()

        try{
            if (!estado || !casos || !confirmados || !mortos || !recuperados || !data) {
                toast.error("Preencha todos os campos!");
                return;
            }
            
            toast.success("Dados enviado com Sucesso!")
            const formData = { estado, casos, confirmados, mortos, recuperados, data };
            console.log(formData);
        }catch(e){
            toast.error("Não foi possivel enviar os dados")
        }
    }
    return(
    <main className="flex min-h-screen bg-gray-900 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Dados Covid19</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label className="block text-sm/6 font-medium text-gray-100">
                Estado
              </label>
              <div className="mt-2">
                <input value={estado} onChange={e => setEstado(e.target.value)} placeholder="Ex: SP" maxLength={2} required className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"/>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm/6 font-medium text-gray-100">
                  Casos
                </label>
              </div>
              <div className="mt-2">
                <input value={casos} onChange={e => setCasos(e.target.value)} type="number"  required className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"/>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm/6 font-medium text-gray-100">
                  Confirmados
                </label>
              </div>
              <div className="mt-2">
                <input value={confirmados} onChange={e => setConfirmados(e.target.value)} type="number" required className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"/>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm/6 font-medium text-gray-100">
                  Mortos
                </label>
              </div>
              <div className="mt-2">
                <input value={mortos} onChange={e => setMortos(e.target.value)} type="number" required className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"/>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm/6 font-medium text-gray-100">
                  Recuperados
                </label>
              </div>
              <div className="mt-2">
                <input value={recuperados} onChange={e => setRecuperados(e.target.value)} type="number" required className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"/>
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm/6 font-medium text-gray-100">
                  Data
                </label>
              </div>
              <div className="mt-2">
                <input value={data} onChange={e => setData(e.target.value)} type="date" required className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"/>
              </div>
            </div>

            <div>
              <button type="submit" onClick={handleEnviar} className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                Enviar
              </button>
            </div>
          </form>
        </div>
    </main>
    )
}

export default Formulario