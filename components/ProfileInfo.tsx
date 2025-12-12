import { FiPhone } from "react-icons/fi";
import { BsFillTelephoneFill } from "react-icons/bs";

interface ProfileHeaderProps {
  name: string;
  title: string;
  phone: string;
  phoneHref: string;
  image: string;
  logo?: string;
  headshot?: string;
  className?: string;
}

export default function ProfileHeader({
  name,
  title,
  phone,
  phoneHref,
  image,
  logo,
  headshot: headshot,
  className = "",
}: ProfileHeaderProps) {
  return (
    <div className={`${className}`}>
      <div className="relative mb-0 group -mx-6 sm:-mx-10 lg:-mx-12 -mt-8 sm:-mt-10">
        <div className="absolute inset-0 bg-linear-to-t from-secondary/50 to-transparent rounded-t-3xl z-10 opacity-0 group-hover:opacity-10 transition-opacity duration-200" />
        <img
          src={image}
          alt={name}
          className="w-full aspect-video sm:aspect-21/9 object-cover rounded-t-xl border-b-4 border-primary"
        />
        
        
        {headshot && (
          <div className="absolute bottom-4 left-8 sm:right-32 lg:right-36 transform translate-y-1/2 z-20">
            <img
              src={headshot}
              alt="Headshot"
              className="h-16 sm:h-20 p-1 bg-white lg:h-24 rounded-full w-auto object-contain"
            />
          </div>
        )}
        
        {logo && (
          <div className="absolute bottom-2 right-6 sm:right-10 lg:right-12 transform translate-y-1/2 z-20">
            <div className="p-1 bg-white rounded-full shadow hover:shadow-xl transition-shadow">
              <img
                src={logo}
                alt="Company Logo"
                className="rounded-full h-16 sm:h-20 lg:h-24 w-auto object-contain"
              />
            </div>
          </div>
        )}
      </div>

      <div className={`flex-1 animate-fade-in-up ${logo || headshot ? 'mt-6 sm:mt-8' : 'mt-4'}`}>
        <h1 className="text-xl sm:text-2xl font-semibold mb-0.5 bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          {name}
        </h1>
        <p className="text-sm sm:text-base font-medium opacity-75 tracking-wide mb-2">{title}</p>
        <a
          href={phoneHref}
          className="inline-flex items-center gap-1 hover:opacity-70 transition-opacity"
        >
          <BsFillTelephoneFill className="text-base sm:text-lg" />
          <span className="text-sm sm:text-base font-medium">{phone}</span>
        </a>
      </div>
    </div>
  );
}