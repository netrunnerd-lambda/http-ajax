import React from 'react';

function Friend(f) {
  const { id, name, age, email, removeFriend } = f;

  return (
    <div className="friend">
      <section className="friend-header">
        <h2>{name} ({age})</h2>
        {removeFriend && <button onClick={_ => removeFriend(id) }> </button>}
      </section>
      <hr />
      <a href={`maillto:${email}`}>{email}</a>
    </div>
  );
}

export default Friend;
