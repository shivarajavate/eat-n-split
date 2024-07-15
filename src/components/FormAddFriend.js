import React, { useState } from "react";
import Button from "./Button";

export default function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");

  const id = Math.round(Math.random() * Math.pow(10, 6));
  const image = `https://i.pravatar.cc/48?u=${id}`;

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) return;
    const newFriend = {
      id: id,
      name: name,
      image: image,
      balance: 0,
    };
    onAddFriend(newFriend);
    setName("");
  }

  return (
    <form className="form-add-friend" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="name">👫 Friend Name</label>
      <input
        type="text"
        placeholder="Friend's Name..."
        id="name"
        name="name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="image">🌄 Image URL</label>
      <input
        type="url"
        placeholder="Friend's Image URL..."
        id="image"
        name="image"
        disabled
        aria-disabled
        required
        value={image}
      />
      <Button>Add</Button>
    </form>
  );
}
