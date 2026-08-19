import './App.css'

import melodiesHeal from './assets/melodies-heal Album cover.jpg'
import oko from './assets/Oko Album Cover.jpg'
import umbuzo from './assets/Umbuzo Single album cover.jpg'
import otherside from './assets/otherside single album cover.jpg'
import rideWithMe from './assets/ride with me single album cover.jpg'
import sabaMbixane from './assets/saba mbixane mixtape album cover.jpg'
import onMyFeet from './assets/on my feet single album cover.jpg'
import lose from './assets/lose album cover.jpg'

function Music() {

  const projects = [
    {
      type: 'ALBUM',
      year: '2026',
      title: 'MELODIES + HEAL',
      image: melodiesHeal,
      description:
        'A collection of melodies, experiences and stories.',
      featured: true,
      link: '#',
    },
    {
      type: 'SINGLE',
      year: '2026',
      title: 'OKO',
      image: oko,
      description: 'A Bussani single.',
      link: 'https://open.spotify.com/track/3MmpAfcSy7OTgjfAxiX54f?si=26ef11a425234051',
    },
    {
      type: 'SINGLE',
      year: '2026',
      title: 'UMBUZO',
      image: umbuzo,
      description: 'A Bussani single.',
      link: 'https://www.youtube.com/watch?v=5SgtL6C24Jo',
    },
    {
      type: 'SINGLE',
      year: '2026',
      title: 'OTHERSIDE',
      image: otherside,
      description: 'A Bussani single.',
      link: 'https://www.youtube.com/watch?v=QCMJZes_KW0',
    },
    {
      type: 'SINGLE',
      year: '2026',
      title: 'RIDE WITH ME',
      image: rideWithMe,
      description: 'A Bussani single.',
      link: 'https://open.spotify.com/track/5cdXSgLojUbFKsoUGv3VG0?si=0f55e0f0dd854a09',
    },
    {
      type: 'MIXTAPE',
      year: '2026',
      title: 'SABA MBIXANE',
      image: sabaMbixane,
      description: 'The mixtape.',
      link: 'https://www.youtube.com/playlist?list=PLWQMyzbzHd9Amd2XhXd9fQxKTZJvzKiNi',
    },
    {
      type: 'SINGLE',
      year: '2026',
      title: 'ON MY FEET',
      image: onMyFeet,
      description: 'A Bussani single.',
      link: 'https://music.youtube.com/watch?v=zgYsER9ppbk&list=PLWQMyzbzHd9CTCEIKOpQMFCtK49QPm-Cf',
    },
    {
      type: 'SINGLE',
      year: '2026',
      title: 'LOSE',
      image: lose,
      description: 'A Bussani single.',
      link: 'https://open.spotify.com/track/0Hbd6TrFOUGml4Qkx5J63K?si=85e9427f04e24dc4',
    },
  ]

  return (
    <div className="music-page">

      {/* Navigation */}

      <header className="navbar music-navbar">

        <a href="/" className="logo">
          BUSSANI
        </a>

        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/#story">Story</a>
          <a href="/videos">Videos</a>
          <a href="/#culture">Culture</a>
          <a href="/#therapy">Therapy Session</a>
        </nav>

      </header>


      {/* Catalogue Hero */}

      <main>

        <section className="music-catalogue-hero">

          <p className="eyebrow">
            BUSSANI / MUSIC ARCHIVE
          </p>

          <h1 className="big-heading blue-sweep">
            MUSIC
            <br />
            <span>CATALOGUE.</span>
          </h1>

          <p className="catalogue-intro">
            Albums, singles, mixtapes and sounds
            from the world of Bussani.
          </p>

        </section>


        {/* Featured Project */}

        <section className="featured-release">

          <div className="catalogue-number">
            01 / FEATURED
          </div>

          <div className="featured-release-grid">

            <div className="featured-cover">

              <img
                src={melodiesHeal}
                alt="Melodies + Heal"
              />

            </div>

            <div className="featured-info">

              <p className="eyebrow">
                2026 / ALBUM
              </p>

              <h2>
                MELODIES
                <br />
                <span>+ HEAL</span>
              </h2>

              <p>
                A collection of melodies, experiences
                and stories from Bussani.
              </p>

              <a
                href="#"
                className="catalogue-button"
              >
                LISTEN ↗
              </a>

            </div>

          </div>

        </section>


        {/* Catalogue */}

        <section className="catalogue-section">

          <div className="catalogue-header">

            <div>
              <p className="eyebrow">
                THE ARCHIVE
              </p>

              <h2>
                ALL
                <br />
                <span>RELEASES.</span>
              </h2>
            </div>

            <div className="catalogue-count">
              {projects.length} RELEASES
            </div>

          </div>


          <div className="release-grid">

            {projects
              .filter((project) => !project.featured)
              .map((project, index) => (
                <article key={project.title} className="release-item">

                 <a
  href={project.link}
  target="_blank"
  rel="noopener noreferrer"
  className="release-image-link"
>
  <div className="release-image">
    <img
      src={project.image}
      alt={project.title}
    />

    <div className="cover-listen">
      LISTEN ↗
    </div>
  </div>
</a>
                  <div className="release-meta">
                    <span>
                      {String(index + 2).padStart(2, '0')}
                    </span>

                    <span>
                      {project.type}
                    </span>

                    <span>
                      {project.year}
                    </span>
                  </div>

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>
                </article>
              ))}

          </div>

        </section>


        {/* Bottom CTA */}

        <section className="music-bottom">

          <p className="eyebrow">
            KEEP LISTENING
          </p>

          <h2>
            ENTER
            <br />
            <span>THE WORLD.</span>
          </h2>

          <a href="/" className="catalogue-button">
            BACK TO BUSSANI ↗
          </a>

        </section>

      </main>


      {/* Footer */}

      <footer className="footer">

        <div className="footer-logo">
          BUSSANI
        </div>

        <p>
          MUSIC • CULTURE • STORIES
        </p>

        <div className="footer-bottom">
          <span>© 2026 BUSSANI</span>
          <span>JOHANNESBURG / SOUTH AFRICA</span>
        </div>

      </footer>

    </div>
  )
}

export default Music