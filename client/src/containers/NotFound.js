import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  const style = { textAlign: "center", padding: "40px" }
  return (
    <div text style={style}>
      <h1>
        404: Not found
      </h1>
      <a href={Link} to="/">
        Back to home
      </a>
    </div>
  );
}

export default NotFound;
