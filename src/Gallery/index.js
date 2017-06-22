import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'rc-slider';

import { loadData, filterByComments } from './actions';
import ImageItem from '../ImageItem';
import style from './style.css';
import 'rc-slider/assets/index.css';


class Gallery extends Component {
  componentWillMount() {
    this.props.onLoadData();
  }

  render() {
    if(!this.props.images) {
      return <div>Loading...</div>;
    }

    const maxComments = Math.max.apply(Math, this.props.images.map((image) => image.data.num_comments));

    return (
      <div>
        <div className="slider">
          <Slider min={0} max={maxComments} onChange={this.props.onFilterByComments} />
        </div>
        <div>Current filter: {this.props.currentFilter}</div>
        <div className="block">
          {this.props.images.map((image, i) => <ImageItem key={i} image={image} />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    images: state.gallery.filteredData,
    currentFilter: state.gallery.currentFilter,
  }
};

const mapDispatchToProps = {
  onLoadData: loadData,
  onFilterByComments: filterByComments,
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
