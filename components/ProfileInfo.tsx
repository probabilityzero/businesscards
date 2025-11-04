import { FiPhone } from "react-icons/fi";
import { BsFillTelephoneFill } from "react-icons/bs";

interface ProfileHeaderProps {
  name: string;
  title: string;
  phone: string;
  phoneHref: string;
  image: string;
  logo?: string;
  className?: string;
}

export default function ProfileHeader({
  name,
  title,
  phone,
  phoneHref,
  image,
  logo,
  className = "",
}: ProfileHeaderProps) {
  return (
    <div className={`${className}`}>
      <div className="relative mb-0 group -mx-6 sm:-mx-10 lg:-mx-12 -mt-8 sm:-mt-10">
        <div className="absolute inset-0 bg-linear-to-t from-secondary/50 to-transparent rounded-t-3xl z-10 opacity-0 group-hover:opacity-10 transition-opacity duration-200" />
        <img
          src={image}
          alt={name}
          className="w-full aspect-video sm:aspect-21/9 object-cover rounded-t-xl shadow-2xl border-b-4 border-primary"
        />
        
        
        {logo && (
          <div className="absolute bottom-0 right-6 sm:right-10 lg:right-12 transform translate-y-1/2 z-20">
            <div className="p-2 bg-white rounded-xs shadow-sm hover:shadow-xl transition-shadow">
              <img
                src={logo}
                alt="Company Logo"
                className="h-8 sm:h-12 lg:h-16 w-auto object-contain"
              />
            </div>
          </div>
        )}
      </div>

      <div className={`flex-1 animate-fade-in-up ${logo ? 'mt-8 sm:mt-10' : 'mt-4'}`}>
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