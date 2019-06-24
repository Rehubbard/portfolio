import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'

import MainLayout from '../components/MainLayout'
import ProjectLightbox from '../components/ProjectLightbox'

class HomeIndex extends React.Component {
  state = {
    isLightboxOpen: false,
    projectBeingViewed: 'prometheus',
  }

  openLightbox = project => {
    this.setState({
      isLightboxOpen: true,
      projectBeingViewed: project,
    })
  }

  closeLightbox = () => {
    this.setState({
      isLightboxOpen: false,
    })
  }

  getProjectPhotos = () => {
    const { data } = this.props
    const projectPhotos = {
      prometheus: [
        data.prometheusOne.childImageSharp.fluid.src,
        data.prometheusTwo.childImageSharp.fluid.src,
        data.prometheusThree.childImageSharp.fluid.src,
      ],
      okfb: [
        data.okfbOne.childImageSharp.fluid.src,
        data.okfbTwo.childImageSharp.fluid.src,
        data.okfbThree.childImageSharp.fluid.src,
      ],
    }
    return projectPhotos
  }

  render() {
    return (
      <MainLayout>
        <div id="main">
          {this.state.isLightboxOpen && (
            <ProjectLightbox
              photos={this.getProjectPhotos()[this.state.projectBeingViewed]}
              closeLightbox={this.closeLightbox}
            />
          )}
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
                    <Img
                      fluid={
                        this.props.data.serveThumbnail.childImageSharp.fluid
                      }
                      objectFit="cover"
                      className="project-thumbnail"
                    />
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
                      </a>{' '}
                      to accomodate their annual outreach program. Used by
                      thousands, it is built with React Native & it's available
                      on iOS & Android.
                    </p>
                  </div>
                </div>
              </article>

              <article className="6u 12u$(xsmall) project-item">
                <div className="project">
                  <div
                    onClick={() => this.openLightbox('prometheus')}
                    className="lightbox"
                  >
                    <Img
                      fluid={
                        this.props.data.prometheusThumbnail.childImageSharp
                          .fluid
                      }
                      objectFit="cover"
                      className="project-thumbnail"
                    />
                  </div>
                  <div className="project-description">
                    <h4>Prometheus web & mobile app</h4>
                    <p>
                      Built with React Native & React, these apps give you
                      control over your trail camera(s). View pictures/videos
                      captured, manage camera settings & more.
                    </p>
                  </div>
                </div>
              </article>

              <article className="6u 12u$(xsmall) project-item">
                <div className="project">
                  <div
                    onClick={() => this.openLightbox('okfb')}
                    className="lightbox"
                  >
                    <Img
                      fluid={
                        this.props.data.okfbThumbnail.childImageSharp.fluid
                      }
                      objectFit="cover"
                      className="project-thumbnail"
                      onClick={() => this.openLightbox('okfb')}
                    />
                  </div>
                  <div className="project-description">
                    <h4>Auto Insurance Quote Portal</h4>
                    <p>
                      Web app built with React & TypeScript. Serves as a
                      customer facing insurance quote portal for Oklahoma Farm
                      Bureau Insurance.{' '}
                    </p>
                  </div>
                </div>
              </article>

              <article className="6u 12u$(xsmall) project-item">
                <div className="project">
                  <a href="https://www.theranest.com/" target="blank">
                    <Img
                      fluid={
                        this.props.data.theranestThumbnail.childImageSharp.fluid
                      }
                      objectFit="cover"
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
              Reach out anytime for questions or anything else. I'm always down
              to get coffee & chat about code, technology, ideas, sports,
              whatever.
            </p>
            <ul className="labeled-icons">
              <li>
                <h3 className="icon fa-envelope-o">
                  <span className="label">Email</span>
                </h3>
                <a href="mailto:rehubbard2@gmail.com">rehubbard2@gmail.com</a>
              </li>
              <li>
                <h3 className="icon fa-mobile">
                  <span className="label">Phone</span>
                </h3>
                205-515-2777
              </li>
            </ul>
          </section>
        </div>
      </MainLayout>
    )
  }
}

export const pageQuery = graphql`
  query {
    serveThumbnail: file(relativePath: { eq: "serve-thumbnail.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    theranestThumbnail: file(relativePath: { eq: "theranest-thumbnail.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    prometheusThumbnail: file(relativePath: { eq: "p-thumbnail.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    okfbThumbnail: file(relativePath: { eq: "okfb-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    prometheusOne: file(relativePath: { eq: "p-mobile-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    prometheusTwo: file(relativePath: { eq: "p-mobile-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    prometheusThree: file(relativePath: { eq: "p-mobile-3.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    okfbOne: file(relativePath: { eq: "okfb-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    okfbTwo: file(relativePath: { eq: "okfb-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    okfbThree: file(relativePath: { eq: "okfb-3.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default HomeIndex
