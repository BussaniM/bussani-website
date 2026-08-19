import './App.css'

function MusicVideos() {

  const videos = [
    {
      year: '2026',
      title: 'ON MY FEET',
      type: 'MUSIC VIDEO',
      description: 'Bussani — On My Feet.',
      id: 'zgYsER9ppbk',
      featured: true,
    },

    {
      year: '2026',
      title: 'RIDE WITH ME',
      type: 'MUSIC VIDEO',
      description: 'Bussani — Ride With Me.',
      id: 'LveugZ2jvBc',
      featured: false,
    },

    {
      year: '2026',
      title: 'STILL OKAY',
      type: 'MUSIC VIDEO',
      description: 'Bussani — Still Okay.',
      id: 'vywhzJDfv_Q',
      featured: false,
    },

    {
      year: '2026',
      title: 'PAID X4',
      type: 'MUSIC VIDEO',
      description: 'Bussani — Paid x4.',
      id: '_D2Xk1k-8G8',
      featured: false,
    },

    {
      year: '2026',
      title: 'FEAR',
      type: 'MUSIC VIDEO',
      description: 'Bussani — Fear.',
      id: '_mMRwm1yYUA',
      featured: false,
    },
  ]


  const featuredVideo = videos.find(
    (video) => video.featured
  )

  const archiveVideos = videos.filter(
    (video) => !video.featured
  )


  return (
    <div className="music-videos-page">

      {/* Navigation */}

      <header className="navbar music-videos-navbar">

        <a href="/" className="logo">
          BUSSANI
        </a>

        <nav className="nav-links">

          <a href="/">
            Home
          </a>

          <a href="/#story">
            Story
          </a>

          <a href="/#culture">
            Culture
          </a>

          <a href="/music">
            Music
          </a>

          <a href="/#therapy">
            Therapy Session
          </a>

        </nav>

      </header>


      <main>

        {/* HERO */}

        <section className="videos-hero">

          <p className="eyebrow">
            BUSSANI / VISUAL ARCHIVE
          </p>

          <h1 className="big-heading blue-sweep">

            MUSIC
            <br />

            <span>
              VIDEOS.
            </span>

          </h1>

          <p className="videos-intro">
            Stories, visuals and moments
            brought to life through music.
          </p>

        </section>


        {/* FEATURED VIDEO */}

        <section className="featured-video-section">

          <div className="catalogue-number">
            01 / FEATURED VIDEO
          </div>


          <div className="featured-video-grid">

            <div className="featured-video-player">

              <iframe
                src={`https://www.youtube.com/embed/${featuredVideo.id}?autoplay=1&mute=1&loop=1&playlist=${featuredVideo.id}&controls=1&rel=0`}
                title={featuredVideo.title}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />

            </div>


            <div className="featured-video-info">

              <p className="eyebrow">
                {featuredVideo.year} / {featuredVideo.type}
              </p>

              <h2>
                ON
                <br />

                <span>
                  MY FEET.
                </span>
              </h2>

              <p>
                {featuredVideo.description}
              </p>

            </div>

          </div>

        </section>


        {/* VIDEO ARCHIVE */}

        <section className="video-archive">

          <div className="video-archive-header">

            <div>

              <p className="eyebrow">
                THE VISUAL ARCHIVE
              </p>

              <h2>

                ALL
                <br />

                <span>
                  VIDEOS.
                </span>

              </h2>

            </div>


            <div className="video-count">

              {archiveVideos.length} VIDEOS

            </div>

          </div>


          {/* VIDEO GRID */}

          <div className="video-grid">

            {archiveVideos.map((video, index) => (

              <article
                className="video-card"
                key={video.title}
              >

                <div className="video-player">

                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&loop=1&playlist=${video.id}&controls=1&rel=0`}
                    title={video.title}
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />

                </div>


                <div className="video-meta">

                  <span>
                    {String(index + 2).padStart(2, '0')}
                  </span>

                  <span>
                    {video.type}
                  </span>

                  <span>
                    {video.year}
                  </span>

                </div>


                <h3>
                  {video.title}
                </h3>


                <p>
                  {video.description}
                </p>

              </article>

            ))}

          </div>

        </section>


        {/* BOTTOM CTA */}

        <section className="videos-bottom">

          <p className="eyebrow">
            KEEP EXPLORING
          </p>

          <h2>

            LISTEN
            <br />

            <span>
              TO THE MUSIC.
            </span>

          </h2>


          <a
            href="/music"
            className="catalogue-button"
          >
            MUSIC CATALOGUE ↗
          </a>

        </section>

      </main>


      {/* FOOTER */}

      <footer className="footer">

        <div className="footer-logo">
          BUSSANI
        </div>

        <p>
          MUSIC • CULTURE • STORIES
        </p>

        <div className="footer-bottom">

          <span>
            © 2026 BUSSANI
          </span>

          <span>
            JOHANNESBURG / SOUTH AFRICA
          </span>

        </div>

      </footer>

    </div>
  )
}

export default MusicVideos