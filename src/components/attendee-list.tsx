import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Search } from "lucide-react";

export default function AttendeeList(){
  return(
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg flex items-center gap-3">
          <Search className="size-4 text-emerald-300"/>
          <input className="bg-transparent flex-1 outline-none p-0 border-0 text-sm" type="text" placeholder="Buscar participante..."/>
        </div>
      </div>

      <div className="border border-white/10 rounded-lg">
        <table className="w-full">
          <thead>
            <tr style={{width: 48}} className="border-b border-white/10">
              <th className="py-3 px-4 text-sm font-semibold text-left">
                <input type="checkbox" className="size-4 bg-black/20 rounded border border-white/10"/>
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">Código</th>
              <th className="py-3 px-4 text-sm font-semibold text-left">Participante</th>
              <th className="py-3 px-4 text-sm font-semibold text-left">Data de inscrição</th>
              <th className="py-3 px-4 text-sm font-semibold text-left">Data de check-in</th>
              <th style={{width: 64}} className="py-3 px-4 text-sm font-semibold text-left"></th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 8 }).map((_, index) => {
              return (
              <tr key={index} className="border-b border-white/10 hover:bg-white/5">
                <td className="py-3 px-4 text-sm text-zinc-300">
                  <input className="size-4 bg-black/20 rounded border border-white/10 accent-orange-400" type="checkbox"  />
                </td>
                <td className="py-3 px-4 text-sm text-zinc-300">123456</td>
                <td className="py-3 px-4 text-sm text-zinc-300">
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-white">Ericles Duarte</span>
                    <span>ericlesduarte@hotmail.com</span>
                  </div>
                </td>
                <td className="py-3 px-4 text-sm text-zinc-300">7 Dias atrás</td>
                <td className="py-3 px-4 text-sm text-zinc-300">3 Dias atrás</td>
                <td className="py-3 px-4 text-sm text-zinc-300">
                  <button className="bg-black/20 border border-white/10 rounded-md p-1.5">
                    <MoreHorizontal className="size-4"/>
                  </button>
                </td>
              </tr>
              )
            })}
          </tbody>
          <tfoot>
            <tr>
              <td className="py-3 px-4 text-sm font-semibold text-left" colSpan={3}>
                Mostrando 10 de 228 itens
              </td>
              <td className="py-3 px-4 text-sm font-semibold text-right" colSpan={3}>
                <div className="inline-flex items-center gap-8">
                  <span>
                    Página 1 de 23
                    <div className="flex gap-1.5">
                      <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                        <ChevronsLeft className="size-4"/>
                      </button>
                      <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                        <ChevronLeft className="size-4"/>
                      </button>
                      <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                        <ChevronRight className="size-4"/>
                      </button>
                      <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                        <ChevronsRight className="size-4"/>
                      </button>
                    </div>
                  </span>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

    </div>
  )
}