export const cardData = {
  name: "Gyan Prakash Rungta",
  company: "SPARTAN VENTURES",
  title: "Managing Director",
  email: "contact@spartanventures.in",
  phone: "7080709006",
  telephone: "0522 4001883",
  location: "Noida, UP",
  address: "A-139, Sector 63, Noida, UP-201307",
  image: "https://www.cps.bureauveritas.com/sites/g/files/zypfnx236/files/2019-11/AdobeStock_210837268.jpg",
  logo: "https://www.usha.in/img/usha-shriram.jpg", 
  logo2: "", 
  tagline: "Brand Licensee of USHA SHRIRAM",
  social: [
    { name: "LinkedIn", url: "https://linkedin.com/company/spartanventures", icon: "linkedin" },
    { name: "GitHub", url: "https://github.com/spartanventures", icon: "github" },
    { name: "WhatsApp", url: "", icon: "messageCircle" }, 
  ],
}

// Helper functions to keep main file clean
export const cardHelpers = {
  // Format phone number with country code
  getFormattedPhone: (phone: string) => {
    const cleaned = phone.replace(/\D/g, "")
    return cleaned.startsWith("91") ? `+${cleaned}` : `+91${cleaned}`
  },

  // Generate tel: link
  getTelLink: (phone: string) => {
    return `tel:${cardHelpers.getFormattedPhone(phone)}`
  },

  // Generate mailto: link
  getMailtoLink: (email: string) => {
    return `mailto:${email}`
  },

  // Generate WhatsApp link
  getWhatsAppLink: (phone: string) => {
    const cleaned = phone.replace(/\D/g, "")
    const withCountryCode = cleaned.startsWith("91") ? cleaned : `91${cleaned}`
    return `https://wa.me/${withCountryCode}`
  },

  // Generate Google Maps link
  getGoogleMapsLink: (address: string) => {
    return `https://www.google.com/maps/search/${encodeURIComponent(address)}`
  },

  // Get social link with WhatsApp auto-generation
  getSocialLinks: () => {
    return cardData.social.map(link => {
      if (link.icon === "messageCircle" && !link.url) {
        return {
          ...link,
          url: cardHelpers.getWhatsAppLink(cardData.phone)
        }
      }
      return link
    })
  },

  // Format phone for display
  getDisplayPhone: (phone: string) => {
    const cleaned = phone.replace(/\D/g, "")
    if (cleaned.length === 10) {
      return cleaned.replace(/(\d{5})(\d{5})/, "$1$2")
    }
    return phone
  },

  // Format telephone for display
  getDisplayTelephone: (telephone: string) => {
    return telephone
  }
}
