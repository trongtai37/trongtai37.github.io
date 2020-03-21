import React, { Component } from 'react'
import trongtai from '../../content/images/trongtai.jpg'
import patreon from '../../content/thumbnails/patreon.png'
import kofi from '../../content/thumbnails/kofi.png'

export default class UserInfo extends Component {
  render() {
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
            </div>
          </div>
        </div>
      </aside>
    )
  }
}
