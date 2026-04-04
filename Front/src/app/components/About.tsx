export function About() {
  return (
    <section id="nosotros" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
            Acerca de nosotros
          </span>
          <h2 className="text-4xl lg:text-5xl mt-3 mb-4 text-slate-900">
            Tu Tranquilidad en Seguros Ltda.
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Somos el aliado incondicional de las familias y empresas colombianas, ofreciendo seguros con cercanía, agilidad y responsabilidad.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-3 items-stretch">
          <div className="flex h-full flex-col rounded-3xl bg-white p-8 border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">Misión</h3>
            <p className="text-slate-600 leading-relaxed grow">
              En Tu Tranquilidad en Seguros Ltda., nos dedicamos a proteger el patrimonio, la vida y los sueños de las familias y empresas colombianas.
              Somos el aliado incondicional que brinda asesoría experta, cálida y ética, ofreciendo soluciones integrales de seguros con un servicio ágil, humano y altamente competitivo.
              Construimos relaciones de confianza a largo plazo.
            </p>
          </div>

          <div className="flex h-full flex-col rounded-3xl bg-white p-8 border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">Visión</h3>
            <p className="text-slate-600 leading-relaxed grow">
              Para 2030, ser la agencia de seguros referente en Colombia por nuestra capacidad de innovación y excelencia humana.
              Nos proyectamos como líderes en fidelización de clientes, gracias a un servicio ágil respaldado por tecnología avanzada y un compromiso inquebrantable con la seguridad y la responsabilidad social.
            </p>
          </div>

          <div className="flex h-full flex-col rounded-3xl bg-white p-8 border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">Por qué elegirnos</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              En Tu Tranquilidad en Seguros Ltda. cambiamos la forma de proteger lo que más le importa.
              Más que intermediarios, somos sus consultores de confianza, acompañándolo mucho más allá de una póliza.
            </p>
            <ul className="mt-auto space-y-4 text-slate-600">
              <li>
                <strong className="text-slate-900">Agilidad sin rodeos:</strong> Olvídese de trámites complicados. Le ofrecemos respuestas rápidas y soluciones a su medida.
              </li>
              <li>
                <strong className="text-slate-900">Presentes cuando más nos necesita:</strong> Si ocurre un imprevisto, nosotros tomamos las riendas y nos encargamos de todo ante la aseguradora.
              </li>
              <li>
                <strong className="text-slate-900">Cercanía y eficiencia:</strong> Queremos proteger lo que usted valora con atención humana y procesos claros.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
