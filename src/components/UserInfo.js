import React from 'react'
import trongtai from '../../content/images/trongtai.jpg'
import patreon from '../../content/thumbnails/patreon.png'
import kofi from '../../content/thumbnails/kofi.png'

const UserInfo = () => {
  return (
    <aside className="note">
      <div className="container note-container">
        <div className="flex-author">
          <div className="flex-avatar">
            <img className="avatar" src={trongtai} alt="Tony Nguyen" />
          </div>
          <div>
            <p>
              I’m Tony Nguyen. I document everything I learn and help thousands of people start
                coding careers.{' '}
              <strong>
                My site has no ads, sponsors, or bullshit. If you enjoy my content, please
                consider supporting what I do.
                </strong>
            </p>

            <div className="flex">
              <a
                href="https://ko-fi.com/trongtai37"
                className="donate-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={kofi} className="coffee-icon" alt="Coffee icon" />
                Buy me a coffee
                </a>
              <a
                className="patreon-button"
                href="https://www.patreon.com/trongtai37"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={patreon} height="50" width="50" /> Become a Patron
                </a>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default UserInfo;