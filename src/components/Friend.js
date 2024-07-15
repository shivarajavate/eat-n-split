import React from "react";
import BalanceMessage from "./BalanceMessage";
import Button from "./Button";

export default function Friend({
  friend,
  selectedFriend,
  onSetSelectedFriend,
}) {
  const isSelected = friend.id === selectedFriend?.id;

  return (
    <li key={friend.id} className={`${isSelected ? "selected" : ""}`}>
      <img src={friend.image} alt={friend.name} />
      <h2>{friend.name}</h2>
      <BalanceMessage name={friend.name} balance={friend.balance} />
      {!isSelected && (
        <Button onClick={() => onSetSelectedFriend(friend)}>Select</Button>
      )}
      {isSelected && (
        <Button onClick={() => onSetSelectedFriend(null)}>Close</Button>
      )}
    </li>
  );
}
