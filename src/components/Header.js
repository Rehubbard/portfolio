import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <div className="image avatar">
            <img src={avatar} alt="eric-hubbard-web-developer" />
          </div>
        </div>
        <Footer />
      </header>
    )
  }
}

export default Header
