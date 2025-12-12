"use client";

import { useState, useEffect } from "react";
import { FaMoon, FaSun, FaAddressBook } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { cardData, cardHelpers } from "@/lib/card-data";
import CompanyInfo from "@/components/CompanyInfo";
import SocialLinks from "@/components/SocialLinks";
import Tagline from "@/components/Tagline";
import Divider from "@/components/ui/Divider";

const ENABLE_THEME_TOGGLE = process.env.NEXT_PUBLIC_ENABLE_THEME_TOGGLE === "true";
const DEFAULT_THEME = process.env.NEXT_PUBLIC_DEFAULT_THEME || "light";

export default function BusinessCard() {
  const [isDark, setIsDark] = useState(DEFAULT_THEME === "dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (!ENABLE_THEME_TOGGLE) {
      const isDefaultDark = DEFAULT_THEME === "dark";
      setIsDark(isDefaultDark);
      if (isDefaultDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return;
    }

    const savedTheme = localStorage.getItem("theme");
    if (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    if (!ENABLE_THEME_TOGGLE) return;

    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const saveContact = async () => {
    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:${cardData.name}
TITLE:${cardData.title}
ORG:${cardData.company}
TEL;TYPE=CELL:${cardData.phone}
TEL;TYPE=WORK:${cardData.telephone}
EMAIL:${cardData.email}
ADR;TYPE=WORK:;;${cardData.address}
URL:${cardData.social.website}
END:VCARD`;

    if (navigator.share && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      try {
        const blob = new Blob([vCard], { type: "text/vcard" });
        const file = new File([blob], `${cardData.name}.vcf`, { type: "text/vcard" });
        await navigator.share({
          files: [file],
          title: `Contact: ${cardData.name}`,
        });
        return;
      } catch (err) {
        console.log("Share failed, falling back to download");
      }
    }

    const blob = new Blob([vCard], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${cardData.name}.vcf`;
    link.click();
    URL.revokeObjectURL(url);
  };

  if (!mounted) return null;

  const socialLinks = cardHelpers.getSocialLinks();

  return (
    <div className="min-h-screen bg-linear-to-br from-background via-background to-secondary/20 text-foreground transition-colors duration-300 font-sans">
      <main className="flex items-center justify-center min-dvh-screen p-4 sm:p-6 lg:p-8">
        <div className="absolute top-6 right-6 sm:top-8 sm:right-8 flex gap-2 z-50">
          <button
            onClick={saveContact}
            className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg bg-secondary/80 backdrop-blur-sm hover:bg-secondary shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            aria-label="Add to contacts"
            title="Add to Contacts"
          >
            <FaAddressBook size={16} />
            <span className="font-medium">Add to Contact</span>
          </button>
          {ENABLE_THEME_TOGGLE && (
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-secondary/80 backdrop-blur-sm hover:bg-secondary shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              aria-label="Toggle dark mode"
              title="Toggle Theme"
            >
              {isDark ? <FaSun size={16} /> : <FaMoon size={16} />}
            </button>
          )}
        </div>
        <div className="w-full max-w-3xl relative">
          <div className="relative bg-secondary/95 backdrop-blur-xl text-secondary-foreground px-6 sm:px-10 lg:px-12 py-8 sm:py-10 shadow-2xl rounded-xl border-primary">
            <div className="relative mb-0 group -mx-6 sm:-mx-10 lg:-mx-12 -mt-8 sm:-mt-10">
              <div className="absolute inset-0 bg-linear-to-t from-secondary/50 to-transparent rounded-t-3xl z-10 opacity-0 group-hover:opacity-10 transition-opacity duration-200" />
              <img
                src={cardData.image}
                alt={cardData.name}
                className="w-full aspect-video sm:aspect-21/9 object-cover rounded-t-xl border-b-4 border-primary"
              />
              {cardData.headshot && (
                <div className="absolute bottom-4 left-8 sm:right-32 lg:right-36 transform translate-y-1/2 z-20">
                  <img
                    src={cardData.headshot}
                    alt="Headshot"
                    className="h-16 sm:h-20 p-1 bg-white lg:h-24 rounded-full w-auto object-contain"
                  />
                </div>
              )}
              {cardData.logo && (
                <div className="absolute bottom-2 right-6 sm:right-10 lg:right-12 transform translate-y-1/2 z-20">
                  <div className="p-1 bg-white rounded-full shadow hover:shadow-xl transition-shadow">
                    <img
                      src={cardData.logo}
                      alt="Company Logo"
                      className="rounded-full h-16 sm:h-20 lg:h-24 w-auto object-contain"
                    />
                  </div>
                </div>
              )}
            </div>
            <div className={`flex-1 animate-fade-in-up ${cardData.logo || cardData.headshot ? "mt-6 sm:mt-8" : "mt-4"}`}>
              <h1 className="text-xl sm:text-2xl font-semibold mb-0.5 bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                {cardData.name}
              </h1>
              <p className="text-sm sm:text-base font-medium opacity-75 tracking-wide mb-2">{cardData.title}</p>
              <a
                href={cardHelpers.getTelLink(cardData.phone)}
                className="inline-flex items-center gap-1 hover:opacity-70 transition-opacity"
              >
                <BsFillTelephoneFill className="text-base sm:text-lg" />
                <span className="text-sm sm:text-base font-medium">{cardHelpers.getDisplayPhone(cardData.phone)}</span>
              </a>
            </div>
            {cardData.company && (
              <CompanyInfo
                companyName={cardData.company}
                address={cardData.address}
                telephone={cardHelpers.getDisplayTelephone(cardData.telephone)}
                addressHref={cardHelpers.getGoogleMapsLink(cardData.address)}
                className="mb-6"
                logo2={cardData.logo2}
              />
            )}
            <Divider className="my-4" />
            <SocialLinks links={socialLinks} className="" />
          </div>
          {cardData.tagline && (
            <Tagline text={cardData.tagline} className="rounded-b-3xl -mt-3 shadow-xl" />
          )}
        </div>
      </main>
    </div>
  );
}
