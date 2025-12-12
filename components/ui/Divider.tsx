interface DividerProps {
  className?: string
}

export default function Divider({ className = "" }: DividerProps) {
  return (
    <div className={`h-px bg-linear-to-r from-transparent via-primary/30 to-transparent ${className}`} />
  )
}