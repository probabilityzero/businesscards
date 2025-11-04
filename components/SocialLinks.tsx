import { FaLinkedin, FaGithub, FaWhatsapp, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa"

const iconMap = {
  linkedin: FaLinkedin,
  github: FaGithub,
  whatsapp: FaWhatsapp,
  messageCircle: FaWhatsapp,
  twitter: FaTwitter,
  instagram: FaInstagram,
  facebook: FaFacebook,
}

interface SocialLink {
  name: string
  url: string
  icon: string
}

interface SocialLinksProps {
  links: SocialLink[]
  className?: string
}

export default function SocialLinks({ links, className = "" }: SocialLinksProps) {
  return (
    <div className={`flex items-center justify-center gap-4 pt-6 border-secondary-foreground/10 ${className}`}>
      {links.map((link) => {
        const Icon = iconMap[link.icon as keyof typeof iconMap] || FaLinkedin
        
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg"
            aria-label={link.name}
            title={link.name}
          >
            <Icon size={20} className="relative z-10" />
            <span className="absolute inset-0 rounded-full bg-primary opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />
          </a>
        )
      })}
    </div>
  )
}