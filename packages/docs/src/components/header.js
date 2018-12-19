import React from 'react';
import { Link } from 'gatsby';

const Header = _ => (
  <div
    style={{
      backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Elementary
        </Link>
      </h1>
      <p
        style={{
          marginTop: '10px',
        }}
      >
        Components you can use ruthlessly in your everyday React Projects.
      </p>
    </div>
  </div>
);

export default Header;
