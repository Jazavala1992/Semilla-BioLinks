import { Link } from "react-router-dom";
import fondo from "../../public/fondo.png";
import loycardFront from "../../public/Loycardfront.png";
import loycardBack from "../../public/Loycardback.png";
import SocialFooter from "../components/SocialFooter";
import "./PromocionesPage.css";

const STICKERS = Array.from({ length: 10 }, (_, index) => index + 1);

export default function PromocionesPage() {
  return (
    <div className="promo-page">
      <div className="promo-page__bg" aria-hidden="true">
        <img src={fondo} alt="" className="promo-page__bg-img" />
      </div>

      <main className="promo-page__content">
        <header className="promo-page__header">
          <p className="promo-page__eyebrow">Promociones</p>
          <h1 className="promo-page__title">Loyalty Card</h1>
        </header>

        <section className="promo-page__info-card">
          <div className="promo-page__info-heading">
            <span className="promo-page__info-badge">Cómo funciona</span>
            <h2 className="promo-page__info-title">Colecciona, disfruta y vuelve por más</h2>
          </div>

          <div className="promo-page__steps">
            <article className="promo-step">
              <span className="promo-step__number">1</span>
              <p className="promo-step__text">Compra una galleta y recibe un sticker para tu tarjeta.</p>
            </article>
            <article className="promo-step">
              <span className="promo-step__number">2</span>
              <p className="promo-step__text">Al llegar a 9 stickers, tu décimo producto te lo ganaste, y es gratis.</p>
            </article>
            <article className="promo-step">
              <span className="promo-step__number">3</span>
              <p className="promo-step__text">Mandanos una foto de tu tarjeta y todos los viernes podras reclamar tu premio en los puntos de venta.</p>
            </article>
            <article className="promo-step">
              <span className="promo-step__number">4</span>
              <p className="promo-step__text">El regalo rota cada semana — así siempre tienes una razón nueva para volver.</p>
            </article>
          </div>

          <div className="promo-page__sticker-track" aria-label="Progreso de stickers">
            {STICKERS.map((sticker) => (
              <span key={sticker} className={`promo-sticker ${sticker === 10 ? "promo-sticker--reward" : ""}`}>
                {sticker === 10 ? null : sticker}
              </span>
            ))}
          </div>
        </section>

        <section className="promo-media-grid" aria-label="Imágenes de la promoción">
          <article className="promo-media-card">
            <div className="promo-media-card__slot">
              <span className="promo-media-card__label">Anverso</span>
              <img
                src={loycardFront}
                alt="Loyalty Card frente"
                className="promo-media-card__image"
              />
            </div>
            <div className="promo-media-card__copy">
              <h2>Frente de la tarjeta</h2>
              <p>Espacio listo para mostrar el diseño principal que verá el cliente al empezar su tarjeta.</p>
            </div>
          </article>

          <article className="promo-media-card">
            <div className="promo-media-card__slot">
              <span className="promo-media-card__label">Reverso</span>
              <img
                src={loycardBack}
                alt="Loyalty Card reverso"
                className="promo-media-card__image"
              />
            </div>
            <div className="promo-media-card__copy">
              <h2>Reverso de la tarjeta</h2>
              <p>Usa este espacio para la parte con la dinámica, instrucciones y sello de validación.</p>
            </div>
          </article>

          <article className="promo-media-card promo-media-card--featured">
            <div className="promo-media-card__slot promo-media-card__slot--featured">
              <span className="promo-media-card__label">Premio semanal</span>
              <span className="promo-media-card__placeholder">Agrega aquí la foto del producto de regalo de esta semana</span>
            </div>
            <div className="promo-media-card__copy">
              <h2>Producto de regalo</h2>
              <p>La imagen debe cambiar cada semana para reflejar el obsequio vigente de la promoción.</p>
            </div>
          </article>
        </section>

        <section className="promo-page__note">
          <p>
            Mándanos una foto de tu tarjeta antes del jueves por WhatsApp — encuéntranos en la sección de redes o entra directo desde el enlace de abajo.
          </p>
        </section>

        <a
          href="https://wa.me/59178864698?text=Hola%2C%20quiero%20reclamar%20mi%20premio%20de%20la%20Loyalty%20Card"
          target="_blank"
          rel="noopener noreferrer"
          className="promo-page__cta"
        >
          Enviar por WhatsApp
        </a>

        <SocialFooter/>

        <Link to="/" className="promo-page__back">
          Volver a home
        </Link>
      </main>
    </div>
  );
}