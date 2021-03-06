import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {

    const imageURL=video.snippet.thumbnails.default.url;
    const imageTitle=video.snippet.title;

    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item"> 
            <div>
                <div className="media-left">
                    <img className="media-object" src={imageURL}/>
                </div>
                <div className="media-body">
                    <div className="media-heading"> {imageTitle} </div>
                </div>  
            </div>
        </li>
    );
};

export default VideoListItem; 