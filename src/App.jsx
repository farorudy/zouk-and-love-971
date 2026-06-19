import heroImg from './assets/hero.png'
import './App.css'

const highlights = [
  'Cours débutants et intermédiaires',
  'Soirées zouk, kompa et kizomba',
  'Ambiance bienveillante en Guadeloupe',
]

function App() {
  return (
    <main className="page-shell">
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Zouk & Love 971</p>
          <h1 id="hero-title">Dansez, partagez, vibrez au rythme des Antilles.</h1>
          <p className="intro">
            Retrouvez une communauté chaleureuse autour des cours, stages et
            soirées zouk en Guadeloupe. Que vous veniez seul, en couple ou entre
            amis, chaque rendez-vous est pensé pour apprendre et s’amuser.
          </p>
          <div className="actions" aria-label="Actions principales">
            <a className="primary-action" href="mailto:contact@zoukandlove971.fr">
              Réserver un cours
            </a>
            <a className="secondary-action" href="#programme">
              Voir le programme
            </a>
          </div>
        </div>
        <div className="hero-card" aria-label="Couple de danseurs">
          <img src={heroImg} alt="Illustration colorée de danseurs" />
        </div>
      </section>

      <section id="programme" className="content-grid" aria-label="Programme">
        <article className="panel featured-panel">
          <span className="panel-label">Prochain rendez-vous</span>
          <h2>Afterwork zouk du vendredi</h2>
          <p>
            Une session conviviale pour pratiquer les bases, rencontrer des
            danseurs et terminer la semaine sur une note solaire.
          </p>
          <p className="event-meta">Vendredi · 19h30 · Pointe-à-Pitre</p>
        </article>

        <article className="panel">
          <h2>Ce qui vous attend</h2>
          <ul className="highlight-list">
            {highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  )
}

export default App
