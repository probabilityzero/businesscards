import { MdCall } from "react-icons/md"
import { FaMapMarkerAlt } from "react-icons/fa"

interface CompanyInfoProps {
  companyName: string
  address: string
  telephone: string
  addressHref: string
  className?: string
}

export default function CompanyInfo({ 
  companyName, 
  address, 
  telephone, 
  addressHref, 
  className = "" 
}: CompanyInfoProps) {
  return (
    <div className={`group p-4 sm:p-5 bg-linear-to-br from-card/95 via-card to-primary/2 rounded-xl border-l-4 border-primary shadow-xl hover:shadow-2xl transition-all duration-500 ${className}`}>
      <div className="pb-3">
        <h2 className="text-2xl sm:text-3xl font-semibold uppercase text-primary font-[family-name:var(--font-fira-sans)]">
          {companyName}
        </h2>
      </div>
      
      <div className="space-y-2">
        <a
          href={`tel:${telephone}`}
          className="group/item flex items-center gap-2.5 p-2.5 rounded-lg bg-emerald-500/4 hover:bg-emerald-500/10 border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300 hover:translate-x-0.5"
        >
          <div className="shrink-0 w-9 h-9 flex items-center justify-center rounded-lg bg-linear-to-br from-emerald-500 via-emerald-600 to-emerald-700 shadow-md group-hover/item:shadow-lg group-hover/item:scale-105 transition-all duration-300">
            <MdCall size={18} className="text-white" />
          </div>
          <div className="flex-1 min-w-0 py-0.5">
            <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.12em] opacity-50 font-bold leading-none">
              Telephone
            </div>
            <div className="text-xs sm:text-sm font-medium text-foreground">
              {telephone}
            </div>
          </div>
        </a>

        <a
          href={addressHref}
          target="_blank"
          rel="noopener noreferrer"
          className="group/item flex items-start gap-2.5 p-2.5 rounded-lg bg-blue-500/4 hover:bg-blue-500/10 border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 hover:translate-x-0.5"
        >
          <div className="shrink-0 w-9 h-9 flex items-center justify-center rounded-lg bg-linear-to-br from-blue-500 via-blue-600 to-blue-700 shadow-md group-hover/item:shadow-lg group-hover/item:scale-105 transition-all duration-300">
            <FaMapMarkerAlt size={16} className="text-white" />
          </div>
          <div className="flex-1 min-w-0 py-0.5">
            <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.12em] opacity-50 font-bold leading-none">
              Location
            </div>
            <div className="text-xs sm:text-sm font-semibold text-foreground/90 leading-snug">
              {address}
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}