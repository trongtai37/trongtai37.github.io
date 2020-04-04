import React, { Component } from 'react'
import { Link } from 'gatsby'
import minion from '../images/minion.png'
import ThemeContext from '../context/ThemeContext'

export default class Navigation extends Component {
  static contextType = ThemeContext

  state = {
    scrolled: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.navOnScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.navOnScroll)
  }

  navOnScroll = () => {
    if (window.scrollY > 20) {
      this.setState({ scrolled: true })
    } else {
      this.setState({ scrolled: false })
    }
  }

  render() {
    const { scrolled } = this.state
    const { menuLinks } = this.props
    const theme = this.context

    return (
      <nav className={scrolled ? 'nav scroll' : 'nav'}>
        <div className="nav-container">
          <div className="brand">
            <Link to="/">
              <img src={minion} className="favicon" alt="Minions" />
              <span className="text">trongtai37</span>
            </Link>
          </div>
          <div className="links">            
            {menuLinks.map(link => (
              <Link key={link.name} to={link.link} activeClassName="active">
                {link.name}
              </Link>
            ))}            
          </div>          
          <div className="theme-switcher">
            <label className="switcher">
              <input type="checkbox" checked={theme.dark} onChange={theme.toggleDark}/>
              <div className="slider"></div>
            </label>
          </div>          
        </div>
      </nav>
    )
  }
}
