import './App.css'
import { useEffect, useRef } from 'react'
import Music from "./music"
import MusicVideos from './MusicVideos'
import bussaniHero from './assets/bussani-hero.jpg'
import mountFrere from './assets/mount-frere.jpg'
import melodiesHeal from './assets/melodies-heal.jpg'
import heroVideo from './assets/hero-video.mp4'
import bussaniLogo from './assets/bussani-logo.png'

import melodiesPhoto1 from './assets/melodies-heal Photoshoot 1.jpg'
import melodiesPhoto2 from './assets/melodies-heal Photoshoot 2.jpg'
import melodiesPhoto3 from './assets/melodies-heal Photoshoot 3.jpg'
import melodiesPhoto4 from './assets/melodies-heal Photoshoot 4.jpg'
function App() {

  const experienceRef = useRef(null)
  const headingRef = useRef(null)

  if (window.location.pathname === '/music') {
    return <Music />
  }
  if (window.location.pathname === '/videos') {
  return <MusicVideos />
}

  useEffect(() => {
    const section = experienceRef.current
    if (!section) return undefined

    const handleScroll = () => {
      const rect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight

      const progress = Math.min(
        Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0),
        1
      )

      section.style.setProperty('--experience-progress', progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {

  const headings =
    document.querySelectorAll('.big-heading')

  const observer = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add('sweep-active')

          observer.unobserve(entry.target)

        }

      })

    },
    {
      threshold: 0.35
    }
  )

  headings.forEach((heading) => {
    observer.observe(heading)
  })

  return () => observer.disconnect()

}, [])
useEffect(() => {

  const heading = headingRef.current

  if (!heading) return

  const observer = new IntersectionObserver(
    ([entry]) => {

      if (entry.isIntersecting) {
        heading.classList.add('reveal')
        observer.disconnect()
      }

    },
    {
      threshold: 0.4
    }
  )

  observer.observe(heading)

  return () => observer.disconnect()

}, [])
  return (
    <div className="site">

      {/* Navigation */}
      <header className="navbar">

  <a href="/" className="logo-icon">
    <img
      src={bussaniLogo}
      alt="Bussani"
    />
  </a>

        <nav className="nav-links">
          <a href="#music">Music</a>
          <a href="#story">Story</a>
          <a href="/videos">Videos</a>
          <a href="#culture">Culture</a>
          <a href="#therapy">Therapy Session</a>
        </nav>

        <button className="menu-button">
          <span></span>
          <span></span>
        </button>
      </header>

      {/* Hero */}
     <main>

  <section className="hero">

    {/* HERO VIDEO */}

    <video
      className="hero-video"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
    >
      <source src={heroVideo} type="video/mp4" />
    </video>


    {/* DARK OVERLAY */}

    <div className="hero-overlay"></div>


    {/* HERO CONTENT */}

    <div className="hero-content">

      <p className="hero-kicker">
        WELCOME TO MY WORLD
      </p>


      <h1 className="big-heading blue-sweep hero-title">

        <span className="typing-text">
          BUSSANI
        </span>

        <span className="typing-cursor">
          |
        </span>

      </h1>


      <p className="hero-description">
        Music. Culture. Stories.
      </p>


      <a
        href="#music"
        className="hero-button"
      >
        EXPLORE MY WORLD
        <span>↗</span>
      </a>

    </div>


    {/* HERO META */}

    <div className="hero-meta">

      <span>01</span>

      <span>—</span>

      <span>BUSSANI</span>

    </div>


    {/* SCROLL */}

    <div className="scroll-indicator">

      <span>
        SCROLL
      </span>

      <span className="scroll-line"></span>

    </div>


  </section>
        {/* Intro */}
       {/* STORY */}

<section className="story-section" id="story">

  <div
    className="story-image"
    style={{ backgroundImage: `url(${mountFrere})` }}
  ></div>

  <div className="story-overlay"></div>


  <div className="story-content">

    {/* TOP */}

    <div className="story-top">

      <p className="eyebrow">
        BUSSANI / THE STORY
      </p>

      <span className="story-number">
        01
      </span>

    </div>


    {/* MAIN STORY */}

    <div className="story-main">

      <p className="story-origin">
        FROM THE EASTERN CAPE
      </p>


      <h2 className="story-heading">

        ROOTED IN
        <br />

        <span>
          CULTURE.
        </span>

      </h2>


      <p className="story-text">

        From Mount Frere to Johannesburg, the journey
        has always been about music, culture, creativity
        and staying connected to where it all began.

      </p>


      <div className="story-location">

        <span>
          MOUNT FRERE
        </span>

        <span className="story-arrow">
          →
        </span>

        <span>
          JOHANNESBURG
        </span>

      </div>

    </div>


    {/* BOTTOM */}

    <div className="story-bottom">

      <span>
        MUSIC
      </span>

      <span>
        CULTURE
      </span>

      <span>
        STORIES
      </span>

    </div>

  </div>

</section>{/* JOURNEY */}

<section className="journey-section" id="journey">

  <div className="journey-header">

    <div>
      <p className="eyebrow">
        BUSSANI / THE JOURNEY
      </p>

      <h2>
        FROM
        <br />
        <span>THEN → NOW.</span>
      </h2>
    </div>

    <p className="journey-intro">
      A journey through music, culture,
      creativity and the places that shaped
      the world of Bussani.
    </p>

  </div>


  <div className="journey-timeline">


    {/* 2010 */}

    <article className="journey-item">

      <div className="journey-year">
        2010
      </div>

      <div className="journey-line">
        <span></span>
      </div>

      <div className="journey-content">

        <p className="eyebrow">
          THE BEGINNING
        </p>

        <h3>
          IMMORTAL
          <br />
          <span>SQUAD.</span>
        </h3>

        <p>
          The journey began with music and the
          formation of Immortal Squad alongside
          Doobie Stash. It was the beginning of
          a creative path that would continue to
          evolve over the years.
        </p>

      </div>

    </article>


    {/* 2012 */}

    <article className="journey-item">

      <div className="journey-year">
        2012
      </div>

      <div className="journey-line">
        <span></span>
      </div>

      <div className="journey-content">

        <p className="eyebrow">
          MUSIC / CULTURE
        </p>

        <h3>
          TARP.
        </h3>

        <p>
          After meeting AGee the Shepherd, a new
          chapter began. TARP became part of the
          journey, bringing music, fashion and
          culture closer together.
        </p>

      </div>

    </article>


    {/* JOZI */}

    <article className="journey-item">

      <div className="journey-year">
        JOZI
      </div>

      <div className="journey-line">
        <span></span>
      </div>

      <div className="journey-content">

        <p className="eyebrow">
          THE MOVEMENT
        </p>

        <h3>
          MUSIC.
          <br />
          <span>CULTURE.</span>
        </h3>

        <p>
          The journey moved through Johannesburg,
          from Braamfontein to Gandhi Square and
          beyond. Performances, collaborations and
          creative projects helped shape the identity
          behind Bussani.
        </p>

      </div>

    </article>


    {/* 2026 */}

    <article className="journey-item">

      <div className="journey-year">
        2026
      </div>

      <div className="journey-line">
        <span></span>
      </div>

      <div className="journey-content">

        <p className="eyebrow">
          THE NEW CHAPTER
        </p>

        <h3>
          MELODIES
          <br />
          <span>+ HEAL.</span>
        </h3>

        <p>
          Melodies + Heal represents a new chapter.
          Music becomes more than entertainment —
          it becomes a place for reflection, emotion,
          connection and healing.
        </p>

      </div>

    </article>


  </div>

</section>
        {/* Music */}
        <section className="melodies-section" id="music">

  <div className="melodies-background"></div>

  <div className="melodies-content">

    <div className="melodies-text">

      <p className="eyebrow">
        LATEST PROJECT
      </p>

      <h2 className="big-heading blue-sweep">
  MELODIES
  <br />
  <span>+ HEAL</span>
</h2>

      <p className="melodies-description">
        Music, experiences and stories from a world where
        melodies become memories.
      </p>

      <div className="melodies-meta">
        <span>ALBUM</span>
        <span>2026</span>
      </div>

      <a href="/music" className="outline-button">
  LISTEN NOW ↗
</a>

    </div>

    <div className="melodies-cover">

      <img
  src={melodiesHeal}
  alt="Melodies + Heal"
/>

    </div>

  </div>

  </section>
{/* Melodies + Heal Experience */}

<section
  className="melodies-experience"
  ref={experienceRef}
>

  <div className="experience-intro">

    <p className="eyebrow">
      THE WORLD OF MELODIES + HEAL
    </p>
<h2
  className="big-heading blue-sweep split-heading"
  ref={headingRef}
>

  <span className="split-line">
    MORE THAN
  </span>

  <span className="split-line">
    <span className="blue-text">
      MUSIC.
    </span>
  </span>

</h2>
    <p className="experience-description">
      Melodies + Heal is a collection of sounds, images,
      emotions and experiences. A world built around the
      idea that music can become a place you return to.
    </p>

  </div>

  <div className="experience-gallery">

    <div className="experience-image image-one">
      <img
        src={melodiesPhoto1}
        alt="Bussani — Melodies + Heal"
      />
    </div>

    <div className="experience-image image-two">
      <img
        src={melodiesPhoto2}
        alt="Bussani — Melodies + Heal"
      />
    </div>

    <div className="experience-image image-three">
      <img
        src={melodiesPhoto3}
        alt="Bussani — Melodies + Heal"
      />
    </div>

    <div className="experience-image image-four">
      <img
        src={melodiesPhoto4}
        alt="Bussani — Melodies + Heal"
      />
    </div>

  </div>

  <div className="experience-statement">

    <span>BUSSANI</span>

    <p>
      SOUND • CULTURE • EXPRESSION
    </p>

  </div>

</section>

        {/* Culture */}
        <section className="culture-section" id="culture">
          <div className="section-number">03 / CULTURE</div>

          <div className="culture-content">
            <p className="eyebrow">MORE THAN MUSIC</p>

            <h2>
              POP
              <br />
              <span>CULTURE.</span>
            </h2>

            <p>
              Music, fashion, visuals, ideas and the culture
              surrounding Bussani.
            </p>
          </div>
        </section>

        {/* Therapy Session */}
        <section className="therapy-section" id="therapy">
          <div className="therapy-content">
            <p className="eyebrow">AN ANNUAL EXPERIENCE</p>

            <h2>THERAPY SESSION</h2>

            <p>
              A space for music, expression, connection and
              everything that comes with being human.
            </p>

            <button className="outline-button">
              DISCOVER MORE ↗
            </button>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-logo">BUSSANI</div>

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

export default App