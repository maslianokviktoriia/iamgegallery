import React, { Component } from 'react';

import style from './style.css';

class ImageItem extends Component {
  render() {
    return (
      <div className="container">
        <div className='imageItem'>
          <img className='image' src= {this.props.image.data.preview.images[0].source.url} />
          <div className='title'>{this.props.image.data.title}</div>
          <div className='comments'>Number of comments {this.props.image.data.num_comments}</div>
          <a href={`https://www.reddit.com${this.props.image.data.permalink}`} target='blank' className='link' >Link</a>
        </div>
      </div>
    );
  }
}

export default ImageItem;
