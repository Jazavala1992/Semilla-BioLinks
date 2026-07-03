import { useState } from "react";
import { Link } from "react-router-dom";
import "./LinksPage.css";
import Insta from "../../public/Instagram.png"
import fondo from "../../public/fondo.png";
import Youtube from "../../public/Youtube.png";
import TikTok from "../../public/TikTok.webp";
import Gmail from "../../public/Gmail.webp";
import WhatsApp from "../../public/WhatsApp.png";
import Ubication from "../../public/Ubicacion.png";
import Facebook from "../../public/Facebook.webp";
import productos from "../../public/productos.png";

// ─── Tipos ─────────────────────────────────────────────────────────────────────

type LinkCategory = "social" | "contact" | "project" | "location";

interface LinkItem {
  id: number;
  category: LinkCategory;
  label: string;
  url: string;
  icon: string;
  iconType?: "emoji" | "image";
  username?: string;
}

interface Profile {
  name?: string;
  username: string;
  bio?: string;
  avatar: string;
}

interface PageConfig {
  profile: Profile;
  links: LinkItem[];
}

interface CategoryMeta {
  title: string;
  icon: string;
}

interface RouteSection {
  title: string;
  to: string;
  buttonLabel: string;
  icon: string;
  iconType?: "emoji" | "image";
}

// ─── Datos de configuración ────────────────────────────────────────────────────
// Edita este objeto para personalizar tu página de enlaces

const CONFIG: PageConfig = {
  profile: {
    username: "@Andi&Jose",
    avatar: "./1.png",
  },

  links: [
    // Redes sociales
    {
      id: 1,
      category: "social",
      label: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61579122410237",
      icon: Facebook,
      iconType: "image",
    },
    {
      id: 2,
      category: "social",
      label: "Instagram",
      url: "https://www.instagram.com/semilla_baking/",
      icon: Insta,
      iconType: "image",
    },
    {
      id: 3,
      category: "social",
      label: "YouTube",
      url: "https://youtube.com/@tucanal",
      icon: Youtube,
      iconType: "image",
    },
    {
      id: 4,
      category: "social",
      label: "TikTok",
      url: "https://tiktok.com/@tuusuario",
      icon : TikTok,
      iconType: "image",
    },

    // Contacto
    {
      id: 5,
      category: "contact",
      label: "Correo electrónico",
      url: "mailto:semillabackery@gmail.com",
      icon: Gmail,
      iconType: "image",
      username: "semillabackery@gmail.com",
    },
    {
      id: 6,
      category: "contact",
      label: "WhatsApp",
      url: "https://wa.me/59178864698",
      icon: WhatsApp,
      iconType: "image",
      username: "+591 78864698",
    },
    // Ubicación
    {
      id: 7,
      category: "location",
      label: "Encuéntrame aquí",
      url: "https://maps.google.com/?q=La+Paz,Bolivia",
      icon: Ubication,
      iconType: "image",
      username: "La Paz, Bolivia",
    },
  ],
};

// ─── Componente: tarjeta de enlace ────────────────────────────────────────────

interface LinkCardProps {
  link: LinkItem;
}

function LinkCard({ link }: LinkCardProps) {
  const [clicked, setClicked] = useState<boolean>(false);

  const handleClick = (): void => {
    setClicked(true);
    setTimeout(() => setClicked(false), 300);
  };

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`link-card link-card--${link.category}${clicked ? " link-card--clicked" : ""}`}
      onClick={handleClick}
      aria-label={`${link.label}: ${link.username}`}
    >
      <span className="link-card__icon" aria-hidden="true">
        {link.iconType === "image"
          ? <img src={link.icon} alt={link.label} className="link-card__icon-img" />
          : link.icon
        }
      </span>

      <span className="link-card__text">
        <span className="link-card__label">{link.label}</span>
        <span className="link-card__username">{link.username}</span>
      </span>

      <span className="link-card__arrow" aria-hidden="true">→</span>
    </a>
  );
}

// ─── Componente: sección de enlaces ───────────────────────────────────────────

const CATEGORY_META: Record<LinkCategory, CategoryMeta> = {
  social:   { title: "Redes Sociales", icon: "🌐" },
  contact:  { title: "Contacto",       icon: "📬" },
  project:  { title: "Proyectos",      icon: "🛠️" },
  location: { title: "Ubicación",      icon: "🗺️" },
};

interface LinkSectionProps {
  category: LinkCategory;
  links: LinkItem[];
}

function LinkSection({ category, links }: LinkSectionProps) {
  const meta = CATEGORY_META[category];
  if (!links.length) return null;

  return (
    <section className={`link-section link-section--${category}`}>
      <h2 className="link-section__title">
        <span className="link-section__title-icon" aria-hidden="true">
          {meta.icon}
        </span>
        {meta.title}
      </h2>

      <div className="link-section__cards">
        {links.map((link) => (
          <LinkCard key={link.id} link={link} />
        ))}
      </div>
    </section>
  );
}

// ─── Componente principal ──────────────────────────────────────────────────────

const CATEGORIES: LinkCategory[] = ["social", "contact", "project", "location"];

const ROUTE_SECTIONS: RouteSection[] = [
  {
    title: "Catálogo",
    to: "/catalogo",
    buttonLabel: "Abrir catálogo",
    icon: productos,
    iconType: "image",
  },
  {
    title: "Promociones",
    to: "/promociones",
    buttonLabel: "Ver promociones",
    icon: "🎁",
  },
];

type GroupedLinks = Record<LinkCategory, LinkItem[]>;

export default function LinksPage() {
  const { profile, links } = CONFIG;

  const grouped = CATEGORIES.reduce<GroupedLinks>(
    (acc, cat) => {
      acc[cat] = links.filter((l) => l.category === cat);
      return acc;
    },
    { social: [], contact: [], project: [], location: [] }
  );

  return (
    <div className="page">
      {/* Fondo decorativo */}
      <div className="page__bg" aria-hidden="true">
        <img src={fondo} alt="" className="page__bg-img" /> 
      </div>

      <main className="container">
        {/* Perfil */}
        <header className="profile">
          <div className="profile__avatar-wrapper">
            <img
              src={profile.avatar}
              alt={`Avatar de ${profile.name}`}
              className="profile__avatar"
            />
          </div>
          <h1 className="profile__name">{profile.name}</h1>
          <p className="profile__username">{profile.username}</p>
          <p className="profile__bio">{profile.bio}</p>
        </header>

        {/* Secciones de navegación */}
        <div className="sections sections--routes">
          {ROUTE_SECTIONS.map((section) => (
            <section key={section.to} className="route-section">
              <h2 className="route-section__title"> {section.title}</h2>
              <Link to={section.to} className="link-card link-card--route">
                <span className="link-card__icon link-card__icon--route" aria-hidden="true">
                  {section.iconType === "image"
                    ? <img src={section.icon} alt="" className="link-card__icon-img" />
                    : section.icon
                  }
                </span>
                <span className="link-card__route-text">{section.buttonLabel}</span>
              </Link>
            </section>
          ))}
        </div>

        {/* Secciones de enlaces */}
        <div className="sections links-group">
          <h2 className="links-group__title">Nuestras redes</h2>
          {CATEGORIES.map((cat) => (
            <LinkSection
              key={cat}
              category={cat}
              links={grouped[cat]}
            />
          ))}
        </div>

        {/* Pie de página */}
        <footer className="page-footer">
          <p className="page-footer__text">
            Hecho con 🍪❤️🍪 · {new Date().getFullYear()}
          </p>
        </footer>
      </main>
    </div>
  );
}
