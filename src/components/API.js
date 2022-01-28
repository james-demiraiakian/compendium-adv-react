import React from 'react';
import './API.css';

export default function API(props) {
  return (
    <div className="api-card">
      <h4>Name of API: {props.API}</h4>
      <div>Auth: {props.Auth}</div>
      <div>Category: {props.Category}</div>
      <div>CORS: {props.Cors}</div>
      <div>Description: {props.Description}</div>
      <div>HTTPS: {props.HTTPS}</div>
      <a href={props.Link}>Link: {props.API}</a>
    </div>
  );
}
