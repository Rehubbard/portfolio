import React from 'react'
import Helmet from 'react-helmet'
import Lightbox from 'react-image-lightbox'

import MainLayout from '../components/MainLayout'
import Gallery from '../components/Gallery'

import serveThumbnail from '../assets/images/serve/serve-thumbnail.jpg'
import serve1 from '../assets/images/serve/serve-1.png'

import prometheusThumbnail from '../assets/images/p-thumbnail.jpg'
import okfbThumbnail from '../assets/images/okfb-3.png'
import theranestThumbnail from '../assets/images/theranest-thumbnail.jpg'

const projectPhotos = {
  serve: [serve1],
}

class HomeIndex extends React.Component {
  handleClickProject = e => {
    console.log(e.target)
  }

  render() {
    return (
      <MainLayout>
        <div id="main">
          <h1>
            👋🏻 I'm Eric Hubbard. A{' '}
            <span className="highlighter">developer</span> trying to build
            helpful and cool things.
          </h1>
          <section id="one">
            <p>
              I'm a web developer from Birmingham, AL with a passion for code,
              design, and technology. Building elegant things with code is my
              speciality and I love learning and improving my skillsets along
              the way.
            </p>
          </section>

          <section id="two">
            <h2>Recent Work</h2>
            {/* <Lightbox mainSrc={[]} isOpen={false} /> */}
            <div className="row">
              <article className="6u 12u$(xsmall) project-item">
                <div className="project">
                  <a
                    href="https://apps.apple.com/us/app/serve-day/id1364161205"
                    target="blank"
                  >
                    <img src={serveThumbnail} className="project-thumbnail" />
                  </a>
                  <div className="project-description">
                    <h4>Serve mobile app</h4>
                    <p>
                      Built for the{' '}
                      <a
                        href="https://www.churchofthehighlands.com/serve/"
                        target="blank"
                      >
                        Church of the Highlands
                      </a>
                      . It accomodates their annual outreach program. Used by
                      thousands, it is built with React Native & it's available
                      on iOS & Android.
                    </p>
                  </div>
                </div>
              </article>

              <article className="6u 12u$(xsmall) project-item">
                <div className="project">
                  <img
                    src={prometheusThumbnail}
                    className="project-thumbnail"
                  />
                  <div className="project-description">
                    <h4>Serve mobile app</h4>
                  </div>
                </div>
              </article>

              <article className="6u 12u$(xsmall) project-item">
                <div className="project">
                  <a href="#">
                    <img src={okfbThumbnail} className="project-thumbnail" />
                  </a>
                  <div className="project-description">
                    <h4>Auto Insurance Quote Portal</h4>
                  </div>
                </div>
              </article>

              <article className="6u 12u$(xsmall) project-item">
                <div className="project">
                  <a href="https://www.theranest.com/" target="blank">
                    <img
                      src={theranestThumbnail}
                      className="project-thumbnail"
                    />
                  </a>
                  <div className="project-description">
                    <h4>TheraNest website</h4>
                    <p>
                      Entire site redesign using Node, Jekyll, Grunt, HTML/CSS
                      and vanilla JS.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </section>

          <section id="three">
            <h2>Get In Touch</h2>
            <p>
              Accumsan pellentesque commodo blandit enim arcu non at amet id
              arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi
              lorem vulputate lorem neque lorem ipsum dolor.
            </p>
            <div className="row">
              <div className="8u 12u$(small)">
                <form method="post" action="#">
                  <div className="row uniform 50%">
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="12u">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        rows="4"
                      ></textarea>
                    </div>
                  </div>
                </form>
                <ul className="actions">
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </div>
              <div className="4u 12u$(small)">
                <ul className="labeled-icons">
                  <li>
                    <h3 className="icon fa-home">
                      <span className="label">Address</span>
                    </h3>
                    1234 Somewhere Rd.
                    <br />
                    Nashville, TN 00000
                    <br />
                    United States
                  </li>
                  <li>
                    <h3 className="icon fa-mobile">
                      <span className="label">Phone</span>
                    </h3>
                    000-000-0000
                  </li>
                  <li>
                    <h3 className="icon fa-envelope-o">
                      <span className="label">Email</span>
                    </h3>
                    <a href="#">hello@untitled.tld</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </MainLayout>
    )
  }
}

export default HomeIndex
