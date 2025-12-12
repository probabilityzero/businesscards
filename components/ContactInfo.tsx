import { ReactNode } from "react"

interface ContactItem {
  icon: ReactNode
  label: string
  value: string
  href: string
}

interface ContactInfoProps {
  items: ContactItem[]
  className?: string
}

export default function ContactInfo({ items, className = "" }: ContactInfoProps) {
  return (
    <div className={`grid sm:grid-cols-2 gap-4 ${className}`}>
      {items.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="group flex items-center gap-3 hover:scale-105 transition-all duration-300"
          target={item.href.startsWith("http") ? "_blank" : undefined}
          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          <div className="shrink-0 p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
            {item.icon}
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-xs opacity-60 block">{item.label}</span>
            <span className="text-sm sm:text-base truncate block font-medium">{item.value}</span>
          </div>
        </a>
      ))}
    </div>
  )
}