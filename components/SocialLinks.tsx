import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope, FaGlobe } from "react-icons/fa"

const socialConfig = {
  email: { 
    icon: FaEnvelope, 
    color: "from-primary to-primary/80",
    hoverBg: "hover:bg-primary/10 active:bg-primary/10",
    hoverBorder: "hover:border-primary/30 active:border-primary/30"
  },
  facebook: { 
    icon: FaFacebook, 
    color: "from-[#1877F2] to-[#0d5dbf]",
    hoverBg: "hover:bg-[#1877F2]/10 active:bg-[#1877F2]/10",
    hoverBorder: "hover:border-[#1877F2]/30 active:border-[#1877F2]/30"
  },
  instagram: { 
    icon: FaInstagram, 
    color: "from-[#E4405F] via-[#9B51E0] to-[#FCAF45]",
    hoverBg: "hover:bg-[#E4405F]/10 active:bg-[#E4405F]/10",
    hoverBorder: "hover:border-[#E4405F]/30 active:border-[#E4405F]/30"
  },
  linkedin: { 
    icon: FaLinkedin, 
    color: "from-[#0077B5] to-[#005582]",
    hoverBg: "hover:bg-[#0077B5]/10 active:bg-[#0077B5]/10",
    hoverBorder: "hover:border-[#0077B5]/30 active:border-[#0077B5]/30"
  },
  twitter: { 
    icon: FaTwitter, 
    color: "from-[#1DA1F2] to-[#0d8bd9]",
    hoverBg: "hover:bg-[#1DA1F2]/10 active:bg-[#1DA1F2]/10",
    hoverBorder: "hover:border-[#1DA1F2]/30 active:border-[#1DA1F2]/30"
  },
  website: { 
    icon: FaGlobe, 
    color: "from-[#6366F1] to-[#4F46E5]",
    hoverBg: "hover:bg-[#6366F1]/10 active:bg-[#6366F1]/10",
    hoverBorder: "hover:border-[#6366F1]/30 active:border-[#6366F1]/30"
  },
  whatsapp: { 
    icon: FaWhatsapp, 
    color: "from-[#25D366] to-[#1da851]",
    hoverBg: "hover:bg-[#25D366]/10 active:bg-[#25D366]/10",
    hoverBorder: "hover:border-[#25D366]/30 active:border-[#25D366]/30"
  },
}

interface SocialLink {
  name: string
  url: string
  icon: keyof typeof socialConfig
}

interface SocialLinksProps {
  links: SocialLink[]
  className?: string
}

export default function SocialLinks({ links, className = "" }: SocialLinksProps) {
  if (links.length === 0) return null

  return (
    <div className={`${className}`}>
      {/* <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-foreground/60 mb-4 text-center">
        Connect With Us
      </h3> */}
      <div className="flex items-center justify-center gap-3 flex-wrap">
        {links.map((link) => {
          const config = socialConfig[link.icon]
          const Icon = config.icon
          
          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative p-3 rounded-xl bg-card/50 border border-border/50 ${config.hoverBg} ${config.hoverBorder} transition-all duration-300 hover:scale-110 active:scale-110 hover:shadow-lg active:shadow-lg`}
              aria-label={link.name}
              title={link.name}
            >
              <div className={`w-10 h-10 flex items-center justify-center rounded-lg bg-linear-to-br ${config.color} shadow-md group-hover:shadow-xl group-active:shadow-xl transition-all duration-300`}>
                <Icon size={20} className="text-white" />
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}