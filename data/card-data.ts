export const cardData = {
  name: "Gyan Prakash Rungta",
  company: "Spartan Hazel Enterprises Pvt Ltd",
  title: "Managing Director",
  email: "hr@ushaswitches.in",
  phone: "+91 7080709006",
  telephone: "0120-3587473",
  location: "Noida, UP",
  address: "B-26, First Floor, Office No. 04, Sector 02, Noida, UP - 201301, India",
  image: "/sh-goup-logo.jpeg",
  logo: "/usha-logo.jpeg",
  logo2: "/bw-sh-logo.jpeg", 
  tagline: "Brand Licensee of USHA SHRIRAM ENTERPRISES PVT LTD",
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
