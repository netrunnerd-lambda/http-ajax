import React from 'react';
import { Link } from 'react-router-dom';

function Friend(f) {
  const { id, name, age, email, removeFriend } = f;

  return (
    <div className="friend">
      <section className="friend-header">
        <Link to={`/edit/${id}`}>
          <h2>{name} ({age})</h2>
        </Link>
        {removeFriend && <button onClick={_ => removeFriend(id) }> </button>}
      </section>
      <hr />
      <a href={`maillto:${email}`}>{email}</a>
    </div>
  );
}

export default Friend;
