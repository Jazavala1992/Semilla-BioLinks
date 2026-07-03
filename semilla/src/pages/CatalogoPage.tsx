import { useState } from "react";
import { Link } from "react-router-dom";
import fondo from "../../public/fondo.png";
import Matilda from "../../public/Matilda.jpeg";
import producto2 from "../../public/2.png";
import producto3 from "../../public/3.png";
import "./CatalogoPage.css";
import Footer from "../components/SocialFooter";

interface CatalogItem {
  id: number;
  name: string;
  image: string;
  description: string;
}

const CATALOG_ITEMS: CatalogItem[] = [
  {
    id: 1,
    name: "Torta Matilda",
    image: Matilda,
    description: "Aquí puedes escribir una descripción más detallada del producto, sus ingredientes, tamaño, sabor o presentación.",
  },
  {
    id: 2,
    name: "Producto 2",
    image: producto2,
    description: "Usa este espacio para explicar variantes, relleno, precio referencial o cualquier detalle que quieras mostrar.",
  },
  {
    id: 3,
    name: "Producto 3",
    image: producto3,
    description: "Añade la información que ayude a vender mejor: porciones, medidas, disponibilidad o recomendación de consumo.",
  },
];



function FlipCard({ item }: { item: CatalogItem }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      type="button"
      className={`catalog-card ${flipped ? "catalog-card--flipped" : ""}`}
      onClick={() => setFlipped((value) => !value)}
      aria-pressed={flipped}
      aria-label={`Abrir detalle de ${item.name}`}
    >
      <span className="catalog-card__inner">
        <span className="catalog-card__face catalog-card__face--front">
          <img src={item.image} alt={item.name} className="catalog-card__image" />
          <span className="catalog-card__name">{item.name}</span>
          <span className="catalog-card__hint">Toca para ver detalle</span>
        </span>

        <span className="catalog-card__face catalog-card__face--back">
          <span className="catalog-card__back-title">{item.name}</span>
          <span className="catalog-card__description">{item.description}</span>
          <span className="catalog-card__hint">Toca otra vez para volver</span>
        </span>
      </span>
    </button>
  );
}

export default function CatalogoPage() {
  return (
    <div className="catalog-page">
      <div className="catalog-page__bg" aria-hidden="true">
        <img src={fondo} alt="" className="catalog-page__bg-img" />
      </div>

      <main className="catalog-page__content">
        <header className="catalog-page__header">
          <p className="catalog-page__eyebrow">Catálogo</p>
          <h1 className="catalog-page__title">Catálogo</h1>
        </header>

        <section className="catalog-grid" aria-label="Catálogo de productos">
          {CATALOG_ITEMS.map((item) => (
            <FlipCard key={item.id} item={item} />
          ))}
        </section>

        <Footer />

        <Link to="/" className="catalog-page__back">
          Volver a home
        </Link>
      </main>
    </div>
  );
}