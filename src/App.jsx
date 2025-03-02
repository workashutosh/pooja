import { Beaker, FlaskConical, TestTube, Book, Languages, Brain } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-chem-blue to-chem-purple text-white font-sans">
      {/* Header */}
      <header className="p-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide animate-pulse">
          Pooja Shah
        </h1>
        <p className="mt-2 text-lg md:text-xl text-chem-green">
          BSc Chemistry Graduate | Analytical Chemist
        </p>
        <div className="mt-4 flex justify-center gap-4 text-sm">
          <span>+91-9987612545</span>
          <span>|</span>
          <a href="mailto:Poojaashah21@gmail.com" className="underline">
            Poojaashah21@gmail.com
          </a>
          <span>|</span>
          <span>Navi Mumbai, Maharashtra</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto p-6 grid gap-8 md:grid-cols-2">
        {/* Summary */}
        <section className="bg-white/10 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <Beaker /> Summary
          </h2>
          <p className="mt-4 text-sm md:text-base">
            Recent BSc Chemistry graduate with a strong academic background and hands-on experience in analytical chemistry, organic chemistry, and more. Passionate about conducting complex chemical analyses and solving practical problems.
          </p>
        </section>

        {/* Skills */}
        <section className="bg-white/10 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <FlaskConical /> Skills
          </h2>
          <div className="mt-4 grid gap-4 text-sm md:text-base">
            <div>
              <strong>Laboratory Skills:</strong> Sample Preparation, Reagent & Solution Preparation, Laboratory Safety
            </div>
            <div>
              <strong>Analytical Techniques:</strong> Chromatography (HPLC, TLC, GC), Titration, Potentiometry, Conductometry
            </div>
            <div>
              <strong>Data Analysis Tools:</strong> Excel, Word
            </div>
            <div>
              <strong>Instrumentation:</strong> Calibration & Maintenance of Laboratory Instruments
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="bg-white/10 p-6 rounded-lg shadow-lg md:col-span-2">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <Book /> Education
          </h2>
          <p className="mt-4 text-sm md:text-base">
            <strong>BSc Chemistry</strong><br />
            Mohantal Raichand Mehta College of Science and Commerce, Airoli<br />
            April 2022 - May 2024
          </p>
        </section>

        {/* Projects */}
        <section className="bg-white/10 p-6 rounded-lg shadow-lg md:col-span-2">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <TestTube /> Projects
          </h2>
          <div className="mt-4 grid gap-4 text-sm md:text-base">
            <div>
              <strong>Monograph of β-Naphthol (03/2024)</strong><br />
              Investigated the chemical properties and industrial applications of β-naphthol, focusing on its role in dye synthesis.
            </div>
            <div>
              <strong>Analysis of Chemical Oxygen Demand (08/2023)</strong><br />
              Analyzed COD in water samples using a spectrophotometer to assess organic pollutants and explore water quality solutions.
            </div>
          </div>
        </section>

        {/* Languages */}
        <section className="bg-white/10 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <Languages /> Languages
          </h2>
          <ul className="mt-4 list-disc list-inside text-sm md:text-base">
            <li>English</li>
            <li>Hindi</li>
            <li>Marathi</li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="p-4 text-center text-sm">
        <p>Built with 💙 for Pooja by her loving partner</p>
      </footer>
    </div>
  );
}

export default App;