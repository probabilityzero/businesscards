export const cardData = {
  name: "Gyan Prakash Rungta",
  company: "SPARTAN VENTURES",
  title: "Managing Director",
  email: "hr@ushaswitches.in",
  phone: "+91 7080709006",
  telephone: "0522-4001883",
  location: "Noida, UP",
  address: "A-139, Sector 63, Noida, UP 201307, India",
  image: "/AdobeStock_210837268.jpg",
  logo: "/usha-shriram-logo.jpg",
  logo2: "", 
  tagline: "Brand Licensee of USHA SHRIRAM",
  social: {
    email: "hr@ushaswitches.in",
    facebook: "",
    instagram: "",
    linkedin: "",
    twitter: "",
    website: "https://ushaswitches.in/",
    whatsapp: "",
  },
}

export const cardHelpers = {
  getFormattedPhone: (phone: string) => {
    const cleaned = phone.replace(/\D/g, "")
    return cleaned.startsWith("91") ? `+${cleaned}` : `+91${cleaned}`
  },

  getTelLink: (phone: string) => {
    return `tel:${cardHelpers.getFormattedPhone(phone)}`
  },

  getMailtoLink: (email: string) => {
    return `mailto:${email}`
  },

  getWhatsAppLink: (phone: string) => {
    const cleaned = phone.replace(/\D/g, "")
    const withCountryCode = cleaned.startsWith("91") ? cleaned : `91${cleaned}`
    return `https://wa.me/${withCountryCode}`
  },

  getGoogleMapsLink: (address: string) => {
    return `https://www.google.com/maps/search/${encodeURIComponent(address)}`
  },

  getSocialLinks: () => {
    const links: Array<{ name: string; url: string; icon: "email" | "facebook" | "instagram" | "linkedin" | "twitter" | "website" | "whatsapp" }> = []
    
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
    const cleaned = phone.replace(/\D/g, "")
    if (cleaned.length === 10) {
      return cleaned.replace(/(\d{5})(\d{5})/, "$1 $2")
    }
    return phone
  },

  getDisplayTelephone: (telephone: string) => {
    return telephone
  }
}
