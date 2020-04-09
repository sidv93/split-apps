import React from 'react';
import './App.css';

import AcpSidenav from '@sidv93/react-acp-sidenav';

function App() {
  const homeUrl = window["homeUrl"];
  return (
    <div className="Wrapper">
      <div className="Container">
        <AcpSidenav className="Navigation" unreadCount={6} homeUrl={homeUrl} />
        <div className="Content">
          <h1>Test Project with React</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime aperiam sit officia consequuntur rem sapiente
            iure dolorum dolor dolores ullam, perspiciatis enim esse soluta, et ipsam molestias quisquam. Fugiat, aut?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime aperiam sit officia consequuntur rem sapiente
            iure dolorum dolor dolores ullam, perspiciatis enim esse soluta, et ipsam molestias quisquam. Fugiat, aut?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime aperiam sit officia consequuntur rem sapiente
            iure dolorum dolor dolores ullam, perspiciatis enim esse soluta, et ipsam molestias quisquam. Fugiat, aut?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime aperiam sit officia consequuntur rem sapiente
            iure dolorum dolor dolores ullam, perspiciatis enim esse soluta, et ipsam molestias quisquam. Fugiat, aut?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime aperiam sit officia consequuntur rem sapiente
            iure dolorum dolor dolores ullam, perspiciatis enim esse soluta, et ipsam molestias quisquam. Fugiat, aut?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime aperiam sit officia consequuntur rem sapiente
            iure dolorum dolor dolores ullam, perspiciatis enim esse soluta, et ipsam molestias quisquam. Fugiat, aut?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime aperiam sit officia consequuntur rem sapiente
            iure dolorum dolor dolores ullam, perspiciatis enim esse soluta, et ipsam molestias quisquam. Fugiat, aut?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime aperiam sit officia consequuntur rem sapiente
            iure dolorum dolor dolores ullam, perspiciatis enim esse soluta, et ipsam molestias quisquam. Fugiat, aut?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime aperiam sit officia consequuntur rem sapiente
            iure dolorum dolor dolores ullam, perspiciatis enim esse soluta, et ipsam molestias quisquam. Fugiat, aut?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime aperiam sit officia consequuntur rem sapiente
            iure dolorum dolor dolores ullam, perspiciatis enim esse soluta, et ipsam molestias quisquam. Fugiat, aut?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime aperiam sit officia consequuntur rem sapiente
            iure dolorum dolor dolores ullam, perspiciatis enim esse soluta, et ipsam molestias quisquam. Fugiat, aut?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime aperiam sit officia consequuntur rem sapiente
            iure dolorum dolor dolores ullam, perspiciatis enim esse soluta, et ipsam molestias quisquam. Fugiat, aut?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime aperiam sit officia consequuntur rem sapiente
            iure dolorum dolor dolores ullam, perspiciatis enim esse soluta, et ipsam molestias quisquam. Fugiat, aut?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime aperiam sit officia consequuntur rem sapiente
            iure dolorum dolor dolores ullam, perspiciatis enim esse soluta, et ipsam molestias quisquam. Fugiat, aut?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime aperiam sit officia consequuntur rem sapiente
            iure dolorum dolor dolores ullam, perspiciatis enim esse soluta, et ipsam molestias quisquam. Fugiat, aut?
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
