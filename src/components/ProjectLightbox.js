import React from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

import prometheusOne from '../assets/images/p-mobile-1.png'
import prometheusTwo from '../assets/images/p-mobile-2.png'
import prometheusThree from '../assets/images/p-mobile-3.png'
import okfbOne from '../assets/images/okfb-1.png'
import okfbTwo from '../assets/images/okfb-2.png'
import okfbThree from '../assets/images/okfb-3.png'

const projectPhotos = {
  prometheus: [prometheusOne, prometheusTwo, prometheusThree],
  okfb: [okfbOne, okfbTwo, okfbThree],
}

class ProjectLightbox extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      photoIndex: 0,
    }
  }
  render() {
    console.log(this.props)
    const { project, closeLightbox } = this.props
    const { photoIndex } = this.state
    const photos = projectPhotos[project]
    return (
      <Lightbox
        mainSrc={photos[photoIndex]}
        nextSrc={photos[(photoIndex + 1) % photos.length]}
        prevSrc={photos[(photoIndex + photos.length - 1) % photos.length]}
        onMovePrevRequest={() =>
          this.setState({
            photoIndex: (photoIndex + photos.length - 1) % photos.length,
          })
        }
        onMoveNextRequest={() =>
          this.setState({
            photoIndex: (photoIndex + 1) % photos.length,
          })
        }
        onCloseRequest={closeLightbox}
      />
    )
  }
}

export default ProjectLightbox
