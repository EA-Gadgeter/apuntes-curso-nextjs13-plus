// Por defecto, en next13+, TODO es un server component
// es decir que el server genera la pagina, y al final la regresa
// al navegador, esto significa que nuestro pagina, puede llegar
// a FUNCIONAR en gran medida SIN JS, incluso si hacemos una expresion
// como la de abajo
export default function HomePage() {
  return (
    <>
      <span className="text-5xl">
        Pagina principal
        {1 + 0}
      </span>
    </>
  );
}
