import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Search } from "lucide-react";
import { IconButton } from "./icon-button";
import { Table } from "./table/table";
import { TableHeader } from "./table/table-header";
import { TableCell } from "./table/table-cell";
import { TableRow } from "./table/table-row";

export function AttendeeList(){
  return(
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg flex items-center gap-3">
          <Search className="size-4 text-emerald-300"/>
          <input className="bg-transparent flex-1 outline-none p-0 border-0 text-sm" type="text" placeholder="Buscar participante..."/>
        </div>
      </div>

      <Table>

        <thead>
          <tr style={{width: 48}} className="border-b border-white/10">
            <TableHeader>
              <input type="checkbox" className="size-4 bg-black/20 rounded border border-white/10"/>
            </TableHeader>
            <TableHeader>Código</TableHeader>
            <TableHeader>Participante</TableHeader>
            <TableHeader>Data de inscrição</TableHeader>
            <TableHeader>Data de check-in</TableHeader>
            <TableHeader style={{width: 64}}></TableHeader>
          </tr>
        </thead>

        <tbody>
          
          {Array.from({ length: 8 }).map((_, index) => {
            return (
            <TableRow key={index}>
              <TableCell className="py-3 px-4 text-sm text-zinc-300">
                <input className="size-4 bg-black/20 rounded border border-white/10 accent-orange-400" type="checkbox"  />
              </TableCell>
              <TableCell className="py-3 px-4 text-sm text-zinc-300">123456</TableCell>
              <TableCell className="py-3 px-4 text-sm text-zinc-300">
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-white">Ericles Duarte</span>
                  <span>ericlesduarte@hotmail.com</span>
                </div>
              </TableCell>
              <TableCell className="py-3 px-4 text-sm text-zinc-300">7 Dias atrás</TableCell>
              <TableCell className="py-3 px-4 text-sm text-zinc-300">3 Dias atrás</TableCell>
              <TableCell className="py-3 px-4 text-sm text-zinc-300">
                <IconButton transparent>
                  <MoreHorizontal className="size-4"/>
                </IconButton>
              </TableCell>
            </TableRow>
            )
          })}

        </tbody>
        <tfoot>
          <TableRow>
            <TableCell colSpan={3}>
              Mostrando 10 de 228 itens
            </TableCell>
            <td className="py-3 px-4 text-sm font-semibold text-right" colSpan={3}>
              <div className="inline-flex items-center gap-8">
                <span>
                  Página 1 de 23
                </span>
                  <div className="flex gap-1.5">
                    <IconButton>
                      <ChevronsLeft className="size-4"/>
                    </IconButton>
                    <IconButton>
                      <ChevronLeft className="size-4"/>
                    </IconButton>
                    <IconButton>
                      <ChevronRight className="size-4"/>
                    </IconButton>
                    <IconButton>
                      <ChevronsRight className="size-4"/>
                    </IconButton>
                  </div>
              </div>
            </td>
          </TableRow>
        </tfoot>
      </Table>
    </div>
  )
}