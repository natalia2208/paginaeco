export default function Hero() {
  return (
    <section className="hero bg-green-300 text-center p-10 rounded-2xl shadow-md w-full max-w-5xl">
      <h1 className="text-4xl font-bold mb-4 text-green-900">
        ¡Bienvenido a EcoHuerta 🌱!
      </h1>
      <p className="text-lg text-green-800 mb-6">
        Aprende sobre cultivos sostenibles y mejora tu huerta con nosotros.
      </p>
      <button className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800">
        Empezar ahora
      </button>
    </section>
  );
}
