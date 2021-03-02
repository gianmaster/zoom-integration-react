import logo from '../../logo.svg';
import React from 'react'

export default function Home() {
  return (
    <div className="container">
      <h1>Home</h1>
      <h2>React version</h2>
      <img src={logo} className="App-logo" alt="logo" />
      <br />
      <p>This is a full example of the use of Zoom SDK and API</p>
      <br />
      <a className="link" href="https://github.com/gianmaster/zoom-api-integration-nodejs">
        Get the backend repo here
      </a>
    </div>
  );
}
