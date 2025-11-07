export default function TipsList() {
  const tips = [
    "Riega tus plantas temprano en la mañana o al atardecer para evitar evaporación.",
    "Usa compost natural para enriquecer el suelo sin químicos.",
    "Cultiva plantas locales para reducir el consumo de agua.",
    "Rota tus cultivos para mantener la salud del suelo.",
    "Atrae polinizadores con flores nativas cercanas."
  ];

  return (
    <section className="bg-white p-6 rounded-2xl shadow-md w-full max-w-3xl">
      <h2 className="text-2xl font-bold text-green-800 mb-4 text-center">
        🌿 Consejos para una Huerta Sostenible
      </h2>
      <ul className="list-disc list-inside text-green-700 leading-relaxed">
        {tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </section>
  );
}
