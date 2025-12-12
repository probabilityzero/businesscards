import { ReactNode } from "react"
import { MdEmail, MdCall, MdLocationOn } from "react-icons/md"
import { BsFillTelephoneFill } from "react-icons/bs"

interface ContactItem {
  icon: ReactNode
  label: string
  value: string
  href: string
}

interface ContactInfoProps {
  email: string
  phone: string
  telephone?: string
  address: string
  className?: string
}

export default function ContactInfo({ 
  email, 
  phone, 
  telephone, 
  address, 
  className = "" 
}: ContactInfoProps) {
  return (
    <div className={`grid sm:grid-cols-2 gap-4 ${className}`}>
      <a
        href={`mailto:${email}`}
        className="group flex items-center gap-3 hover:scale-105 transition-all duration-300"
      >
        <div className="shrink-0 p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
          <MdEmail size={20} className="text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <span className="text-xs opacity-60 block">Email</span>
          <span className="text-sm sm:text-base truncate block font-medium">{email}</span>
        </div>
      </a>

      <a
        href={`tel:${phone}`}
        className="group flex items-center gap-3 hover:scale-105 transition-all duration-300"
      >
        <div className="shrink-0 p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
          <BsFillTelephoneFill size={18} className="text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <span className="text-xs opacity-60 block">Phone</span>
          <span className="text-sm sm:text-base truncate block font-medium">{phone}</span>
        </div>
      </a>

      {telephone && (
        <a
          href={`tel:${telephone}`}
          className="group flex items-center gap-3 hover:scale-105 transition-all duration-300"
        >
          <div className="shrink-0 p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <MdCall size={20} className="text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-xs opacity-60 block">Telephone</span>
            <span className="text-sm sm:text-base truncate block font-medium">{telephone}</span>
          </div>
        </a>
      )}

      <a
        href={`https://www.google.com/maps/search/${encodeURIComponent(address)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 hover:scale-105 transition-all duration-300"
      >
        <div className="shrink-0 p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
          <MdLocationOn size={20} className="text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <span className="text-xs opacity-60 block">Location</span>
          <span className="text-sm sm:text-base truncate block font-medium">{address}</span>
        </div>
      </a>
    </div>
  )
}