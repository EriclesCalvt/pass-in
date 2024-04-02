import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Search } from "lucide-react";
import { IconButton } from "./icon-button";
import { Table } from "./table/table";
import { TableHeader } from "./table/table-header";
import { TableCell } from "./table/table-cell";
import { TableRow } from "./table/table-row";
import { ChangeEvent, useState } from "react";
import { attendees } from "../data/attendees";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import 'dayjs/locale/pt-br'

dayjs.extend(relativeTime)
dayjs.locale('pt-br')

export function AttendeeList(){

  const [search, setSearch] = useState<string>('')
  const [page, setPage] = useState(1)


  const totalPages = Math.ceil(attendees.length / 10)

  function onSearchInputChanged(event: ChangeEvent<HTMLInputElement>){
    setSearch(event.target.value);
  }

  function goToLastPage(){
    setPage(totalPages)
  }

  function goToFirstPage(){
    setPage(1)
  }

  function goToNextPage(){
    setPage(page + 1)
  }

  function goToPreviousPage(){
    setPage(page - 1 )
  }


  return(
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg flex items-center gap-3">
          <Search className="size-4 text-emerald-300"/>
          <input onChange={onSearchInputChanged} className="bg-transparent flex-1 outline-none p-0 border-0 text-sm" type="text" placeholder="Buscar participante..."/>
        </div>
      </div>
      {search}

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
          
          {attendees.slice((page - 1) * 10, page * 10).map((attendee) => {
            return (
            <TableRow key={attendee.id}>
              <TableCell className="py-3 px-4 text-sm text-zinc-300">
                <input className="size-4 bg-black/20 rounded border border-white/10 accent-orange-400" type="checkbox"  />
              </TableCell>
              <TableCell className="py-3 px-4 text-sm text-zinc-300">{attendee.id}</TableCell>
              <TableCell className="py-3 px-4 text-sm text-zinc-300">
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-white">{attendee.name}</span>
                  <span>{attendee.email}</span>
                </div>
              </TableCell>
              <TableCell className="py-3 px-4 text-sm text-zinc-300">{dayjs().to(attendee.createdAt)}</TableCell>
              <TableCell className="py-3 px-4 text-sm text-zinc-300">{dayjs().to(attendee.checkedInAt)}</TableCell>
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
              Mostrando 10 de {attendees.length} itens
            </TableCell>
            <td className="py-3 px-4 text-sm font-semibold text-right" colSpan={3}>
              <div className="inline-flex items-center gap-8">
                <span>
                  Página {page} de {totalPages}
                </span>
                  <div className="flex gap-1.5">
                    <IconButton onClick={goToFirstPage} disabled={page === 1}>
                      <ChevronsLeft className="size-4"/>
                    </IconButton>
                    <IconButton onClick={goToPreviousPage} disabled={page === 1}>
                      <ChevronLeft className="size-4"/>
                    </IconButton>
                    <IconButton onClick={goToNextPage} disabled={page === totalPages}>
                      <ChevronRight className="size-4"/>
                    </IconButton>
                    <IconButton onClick={goToLastPage} disabled={page === totalPages}>
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