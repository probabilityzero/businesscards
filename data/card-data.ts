export const cardData = {
  name: "Elena Sîli",
  company: "",
  title: "Professional Translator & Interpreter",
  email: "elenasili566@gmail.com",
  phone: "+373 68740001",
  telephone: "",
  location: "Bacău, Chișinău, Moldova",
  address: "Bacău, Chișinău, Moldova",
  image: "https://images.unsplash.com/photo-1497384401032-2182d2687715?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8bWluaW1hbGlzdCUyMHdhbGxwYXBlcnx8MHx8fHwxNjI5MzE3MzUx&ixlib=rb-1.2.1&q=80&w=1080",
  logo: "/ss.webp",
  logo2: "", 
  tagline: "",
  social: {
    email: "elenasili566@gmail.com",
    facebook: "https://www.facebook.com/elena.sili.58",
    instagram: "https://www.instagram.com/elsoreil",
    linkedin: "https://www.linkedin.com/in/sili-elena-9368aa68",
    twitter: "",
    website: "",
    whatsapp: "https://wa.me/37368740001",
    telegram: "https://t.me/sorreil",
  },
}

export const cardHelpers = {
  getFormattedPhone: (phone: string) => {
    const cleaned = phone.replace(/\D/g, "")
    return cleaned.startsWith("373") ? `+${cleaned}` : phone
  },

  getTelLink: (phone: string) => {
    return `tel:${cardHelpers.getFormattedPhone(phone)}`
  },

  getMailtoLink: (email: string) => {
    return `mailto:${email}`
  },

  getWhatsAppLink: (phone: string) => {
    const cleaned = phone.replace(/\D/g, "")
    const withCountryCode = cleaned.startsWith("373") ? cleaned : `373${cleaned}`
    return `https://wa.me/${withCountryCode}`
  },

  getGoogleMapsLink: (address: string) => {
    return `https://www.google.com/maps/search/${encodeURIComponent(address)}`
  },

  getSocialLinks: () => {
    const links: Array<{ name: string; url: string; icon: "email" | "facebook" | "instagram" | "linkedin" | "twitter" | "website" | "whatsapp" | "telegram" }> = []
    
    if (cardData.social.email) {
      links.push({ 
        name: "Email", 
        url: cardHelpers.getMailtoLink(cardData.social.email), 
        icon: "email" 
      })
    }
    if (cardData.social.facebook) {
      links.push({ name: "Facebook", url: cardData.social.facebook, icon: "facebook" })
    }
    if (cardData.social.instagram) {
      links.push({ name: "Instagram", url: cardData.social.instagram, icon: "instagram" })
    }
    if (cardData.social.linkedin) {
      links.push({ name: "LinkedIn", url: cardData.social.linkedin, icon: "linkedin" })
    }
    if (cardData.social.twitter) {
      links.push({ name: "Twitter", url: cardData.social.twitter, icon: "twitter" })
    }
    if (cardData.social.website) {
      links.push({ name: "Website", url: cardData.social.website, icon: "website" })
    }
    if (cardData.social.telegram) {
      links.push({ name: "Telegram", url: cardData.social.telegram, icon: "telegram" })
    }
    if (cardData.social.whatsapp || cardData.phone) {
      links.push({ 
        name: "WhatsApp", 
        url: cardData.social.whatsapp || cardHelpers.getWhatsAppLink(cardData.phone), 
        icon: "whatsapp" 
      })
    }
    
    return links
  },

  getDisplayPhone: (phone: string) => {
    return phone
  },

  getDisplayTelephone: (telephone: string) => {
    return telephone
  }
}
