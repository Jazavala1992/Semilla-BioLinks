import { Link } from "react-router-dom";
import fondo from "../../public/fondo.png";
import "./SectionPage.css";

interface SectionPageProps {
  eyebrow: string;
  title: string;
  text: string;
}

export default function SectionPage({ eyebrow, title, text }: SectionPageProps) {
  return (
    <div className="section-page">
      <div className="section-page__bg" aria-hidden="true">
        <img src={fondo} alt="" className="section-page__bg-img" />
      </div>

      <main className="section-page__card">
        <p className="section-page__eyebrow">{eyebrow}</p>
        <h1 className="section-page__title">{title}</h1>
        <p className="section-page__text">{text}</p>
        <Link to="/" className="section-page__back">
          Volver a home
        </Link>
      </main>
    </div>
  );
}