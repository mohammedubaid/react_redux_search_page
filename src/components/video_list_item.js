import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li className="search-list-item">
      <div className="video-list media">
        <div className="details-block">
          <img className="media-object" src={imageUrl} />
          <div className="media-body">
            <p className="media-heading">{video.snippet.title}</p>
            <p className="media-description">{video.snippet.title}</p>
          </div>
        </div>
        <div className="bottom-details-block">
          <p className="channel-title">Bottom Left</p>
          <p className="video-time">Bottom Right</p>
          <div style={{clear:'both'}}></div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
