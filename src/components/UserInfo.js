import React, { Component } from 'react'
import trongtai from '../../content/images/trongtai.jpg'

export default class UserInfo extends Component {
  render() {
    return (
      <aside className="note">
        <div className="container note-container">
          <div className="flex-author">
            <div className="flex-avatar">
              <img className="avatar" src={trongtai} alt="trongtai37" />
            </div>
            <div>
              <p>
                I’m <strong>trongtai37</strong>. I document everything I learn and share everyone who start
                coding careers.{' '}
                <br/>
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
