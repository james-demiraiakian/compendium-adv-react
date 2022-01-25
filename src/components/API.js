import React from 'react';
import './API.css';

export default function API(props) {
  return (
    <div className="api-card">
      <div>Name of API: {props.API}</div>
      <div>Auth: {props.Auth}</div>
      <div>Category: {props.Category}</div>
      <div>CORS: {props.Cors}</div>
      <div>Description: {props.Description}</div>
      <div>HTTPS: {props.HTTPS}</div>
      <a href={props.Link}>Link: {props.API}</a>
    </div>
  );
}
