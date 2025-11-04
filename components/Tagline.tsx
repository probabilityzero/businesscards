interface TaglineProps {
  text: string
  className?: string
}

export default function Tagline({ text, className = "" }: TaglineProps) {
  return (
    <div className={`bg-linear-to-r from-primary via-primary/90 to-primary text-primary-foreground py-4 px-6 text-center shadow-lg ${className}`}>
      <p className="text-sm sm:text-base font-semibold animate-fade-in pt-4">
        {text}
      </p>
    </div>
  )
}