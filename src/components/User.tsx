import React, { FC, useState } from 'react';
import { IPost } from '../types/types';

import "./User.scss";

interface UserProps {
  post: IPost;
}

function User({ post }): FC<UserProps> | ReturnType<FC> {
  const [disabled, setDisabled] = useState(true);

  const [name, setName] = useState(post.name);
  const [username, setUsername] = useState(post.username);
  const [email, setEmail] = useState(post.email);
  const [street, setStreet] = useState(post.address.street);
  const [city, setCity] = useState(post.address.city);
  const [zipcode, setZipcode] = useState(post.address.zipcode);
  const [phone, setPhone] = useState(post.phone);
  const [website, setWebsite] = useState(post.website);
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(
      JSON.stringify({
        name: name,
        username: username,
        email: email,
        street: street,
        city: city,
        zipcode: zipcode,
        phone: phone,
        website: website,
        comment: comment,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit} className="card-details">
      <div className="card-details-top">
        <h5>Профиль пользователя</h5>
        <button onClick={() => setDisabled(!disabled)} type="button">
          Редактировать
        </button>
      </div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={disabled ? true : false}
        required={true}
      />
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        disabled={disabled ? true : false}
        required={true}
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={disabled ? true : false}
        required={true}
      />
      <input
        value={street}
        onChange={(e) => setStreet(e.target.value)}
        disabled={disabled ? true : false}
        required={true}
      />
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        disabled={disabled ? true : false}
        required={true}
      />
      <input
        value={zipcode}
        onChange={(e) => setZipcode(e.target.value)}
        disabled={disabled ? true : false}
        required={true}
      />
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        disabled={disabled ? true : false}
        required={true}
      />
      <input
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        disabled={disabled ? true : false}
        required={true}
      />
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        disabled={disabled ? true : false}></textarea>
      <button className="card-details-submit" type="submit">Отправить</button>
    </form>
  );
}

export default User;
