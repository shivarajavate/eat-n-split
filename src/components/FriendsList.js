import React from "react";
import Friend from "./Friend";

export default function FriendsList({
  friends,
  selectedFriend,
  onSetSelectedFriend,
}) {
  return (
    <>
      <ul>
        {friends.map((friend) => (
          <Friend
            key={friend.id}
            friend={friend}
            selectedFriend={selectedFriend}
            onSetSelectedFriend={onSetSelectedFriend}
          />
        ))}
      </ul>
    </>
  );
}
