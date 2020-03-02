import React from 'react'
import kebabCase from 'lodash.kebabcase'
import { Link } from 'gatsby'

const PostTags = (props) => {  
    const { tags, size } = props

    return (
      <div className="tag-container">
        {tags &&
          tags.map(tag => (
            <Link key={tag} style={{ textDecoration: 'none' }} to={`/tags/${kebabCase(tag)}/`}>
              <span className={size}>{tag}</span>
            </Link>
          ))}
      </div>
    )  
}

export default PostTags;
