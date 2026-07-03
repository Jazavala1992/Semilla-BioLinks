import Facebook from "../../public/Facebook.webp";
import Instagram from "../../public/Instagram.png";
import TikTok from "../../public/TikTok.webp";
import Youtube from "../../public/Youtube.png";
import WhatsApp from "../../public/WhatsApp.png";
import semillaLogo from "../../public/1.png";
import "./SocialFooter.css";

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/semilla_baking/", icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61579122410237", icon: Facebook },
  { label: "YouTube", href: "https://www.youtube.com/", icon: Youtube },
  { label: "TikTok", href: "https://www.tiktok.com/", icon: TikTok },
  { label: "WhatsApp", href: "https://wa.me/59178864698", icon: WhatsApp },
];


export default function SocialFooter() {
  return (
    <footer className="social-footer">
      <div className="social-footer__main">
        <div className="social-footer__links">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-footer__link"
              aria-label={social.label}
              title={social.label}
            >
              <img src={social.icon} alt="" className="social-footer__icon" />
            </a>
          ))}
        </div>

        <div className="social-footer__brand">
          <img src={semillaLogo} alt="Semilla" className="social-footer__logo" />
        </div>
      </div>
    </footer>
  );
}