import { FiMapPin, FiPhone } from "react-icons/fi"

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
    <div className={`p-6 bg-background/50 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-300 ${className}`}>
      <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-wider mb-4 text-primary">
        {companyName}
      </h2>
      
      <a
        href={`tel:${telephone}`}
        className="group flex items-center gap-3 mb-4 hover:scale-[1.02] transition-all duration-300"
      >
        <div className="shrink-0 p-2 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
          <FiPhone size={20} className="text-blue-500 fill-blue-500" />
        </div>
        <div className="flex-1 min-w-0">
          <span className="text-xs opacity-60 block">Telephone</span>
          <span className="text-sm sm:text-base font-medium">{telephone}</span>
        </div>
      </a>

      <a
        href={addressHref}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-start gap-3 hover:scale-[1.02] transition-all duration-300"
      >
        <div className="shrink-0 p-2 rounded-lg bg-red-500/10 group-hover:bg-red-500/20 transition-colors mt-0.5">
          <FiMapPin size={20} className="text-red-500 fill-red-500" />
        </div>
        <div className="flex-1 min-w-0">
          <span className="text-xs opacity-60 block">Address</span>
          <span className="text-sm sm:text-base block font-medium leading-relaxed">{address}</span>
        </div>
      </a>

    </div>
  )
}