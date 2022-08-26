import './styles.css';
import React from 'react';

export const PostCard = ({ title, cover, body, id }) => (
  <div className="post">
    <img src={cover} alt={title} />
    <div className="post-content">
      {id}
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  </div>
);
