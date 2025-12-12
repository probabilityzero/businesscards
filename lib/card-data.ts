export const cardData = {
  name: "John Doe",
  company: "Example Corp",
  title: "Position Title",
  email: "example@example.com",
  phone: "+1 1234567890",
  telephone: "123-456-7890",
  location: "City, State",
  address: "123 Example Street, Suite 100, City, State, ZIP, Country",
  image: "/placeholder.svg",
  headshot: "/professional-headshot.jpg",
  logo: "/placeholder-logo.png",
  logo2: "/placeholder-logo.svg",
  tagline: "Your Company Tagline Here",
  social: {
    email: "contact@example.com",
    facebook: "https://facebook.com/example",
    instagram: "https://instagram.com/example",
    linkedin: "https://linkedin.com/in/example",
    twitter: "https://twitter.com/example",
    website: "https://example.com",
    whatsapp: "",
  },
};

export const cardHelpers = {
  getFormattedPhone: (phone: string) => {
    const cleaned = phone.replace(/\D/g, "");
    return cleaned.startsWith("1") ? `+${cleaned}` : `+1${cleaned}`;
  },

  getTelLink: (phone: string) => {
    return `tel:${cardHelpers.getFormattedPhone(phone)}`;
  },

  getMailtoLink: (email: string) => {
    return `mailto:${email}`;
  },

  getWhatsAppLink: (phone: string) => {
    const cleaned = phone.replace(/\D/g, "");
    const withCountryCode = cleaned.startsWith("1") ? cleaned : `1${cleaned}`;
    return `https://wa.me/${withCountryCode}`;
  },

  getGoogleMapsLink: (address: string) => {
    return `https://www.google.com/maps/search/${encodeURIComponent(address)}`;
  },

  getSocialLinks: () => {
    const links: Array<{ name: string; url: string; icon: string }> = [];

    if (cardData.social.email) {
      links.push({
        name: "Email",
        url: cardHelpers.getMailtoLink(cardData.social.email),
        icon: "email",
      });
    }
    if (cardData.social.facebook) {
      links.push({ name: "Facebook", url: cardData.social.facebook, icon: "facebook" });
    }
    if (cardData.social.instagram) {
      links.push({ name: "Instagram", url: cardData.social.instagram, icon: "instagram" });
    }
    if (cardData.social.linkedin) {
      links.push({ name: "LinkedIn", url: cardData.social.linkedin, icon: "linkedin" });
    }
    if (cardData.social.twitter) {
      links.push({ name: "Twitter", url: cardData.social.twitter, icon: "twitter" });
    }
    if (cardData.social.website) {
      links.push({ name: "Website", url: cardData.social.website, icon: "website" });
    }
    if (cardData.social.whatsapp || cardData.phone) {
      links.push({
        name: "WhatsApp",
        url: cardData.social.whatsapp || cardHelpers.getWhatsAppLink(cardData.phone),
        icon: "whatsapp",
      });
    }

    return links;
  },

  getDisplayPhone: (phone: string) => {
    const cleaned = phone.replace(/\D/g, "");
    if (cleaned.length === 10) {
      return cleaned.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3");
    }
    return phone;
  },

  getDisplayTelephone: (telephone: string) => {
    return telephone;
  },
};
