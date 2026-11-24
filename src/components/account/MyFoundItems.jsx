import { Link } from 'react-router-dom'
import useSWR from 'swr'
import { HandHeart } from 'lucide-react'
import { listMyFoundItems } from '../../data/api.js'
import { formatDate } from '../../lib/format.js'
import { useAuth } from '../../auth/AuthProvider.jsx'
import { ItemThumb, StatusBadge } from '../ItemBits.jsx'
import { EmptyState, Spinner } from '../ui.jsx'

export default function MyFoundItems() {
  const { user } = useAuth()
  const { data, error, isLoading } = useSWR(['my-items', user.id], listMyFoundItems)

  if (isLoading) return <Spinner />
  if (error) return <EmptyState icon={HandHeart} title="Algo deu errado">{error.message}</EmptyState>
  if (!data.length) {
    return <EmptyState icon={HandHeart} title="Nenhum objeto registrado">Achou algo no campus? <Link to="/achei" className="font-semibold text-flame-600 underline">Registre aqui</Link>.</EmptyState>
  }

  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {data.map((i) => (
        <li key={i.id} className="card flex gap-4 overflow-hidden p-3">
          <div className="size-20 shrink-0 overflow-hidden rounded-xl"><ItemThumb item={i} /></div>
          <div className="min-w-0 flex-1">
            <StatusBadge status={i.status} />
            <p className="mt-1 truncate font-bold text-navy-900">{i.name}</p>
            <p className="text-xs text-muted">{i.ref} · {formatDate(i.dateFound)}{i.sensitive ? ' · foto restrita' : ''}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
