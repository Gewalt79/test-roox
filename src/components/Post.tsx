import React, { FC } from 'react';
import './Post.scss';

interface IPost {
    openDetails: (id: number) => void
    id: number;
    name: string;
    city: string;
    company: string;
}

function Post({ openDetails, id, name, city, company }):FC <IPost> | ReturnType<FC> {
  return (
    <div className="card">
      <div className="card-row">
        <p>ФИО:</p>
        &nbsp;
        <h5>{name}</h5>
      </div>
      <div className="card-row">
        <p>Город:</p>
        &nbsp;
        <h5>{city}</h5>
      </div>
      <div className="card-row">
        <p>Компания:</p>
        &nbsp;
        <h5>{company}</h5>
        <p className="details" onClick={() => openDetails(id)}>Подробнее</p>
      </div>
    </div>
  );
}

export default Post;
