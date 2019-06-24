import React from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

class ProjectLightbox extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      photoIndex: 0,
    }
  }
  render() {
    const { photos, closeLightbox } = this.props
    const { photoIndex } = this.state
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
        enableZoom={false}
      />
    )
  }
}

export default ProjectLightbox
