import React from 'react';
import image from "../../public/BBC.jpg"

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: '345px', width: '100%' }}>
      <img src={src ? src:image} style={{ height: '200px', width: '100%', objectFit: 'cover' }} className="card-img-top" alt="..." />
      <div className="card-body" style={{ height: '200px' }}>
        <h5 className="card-title">{title ? title.slice(0, 50) : 'No Title'}</h5>
        <p className="card-text" >{description ? description.slice(0, 90) : 'News is information about current events. This may be provided through many different media:'}</p>
        <a href={url} className="btn btn-primary">Read More</a>
      </div>
    </div>
  );
}

export default NewsItem;
