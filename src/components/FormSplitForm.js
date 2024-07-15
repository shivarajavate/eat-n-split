import React, { useEffect, useState } from "react";
import Button from "./Button";

export default function FormSplitForm({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("you");

  function handleBill(e) {
    const newValue = Number(e.target.value);
    setBill(newValue);
  }

  function handlePaidByUser(e) {
    const newValue =
      Number(e.target.value) > bill ? paidByUser : Number(e.target.value);
    setPaidByUser(newValue);
  }

  function handleWhoIsPaying(e) {
    const newValue = e.target.value;
    setWhoIsPaying(newValue);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !paidByUser) return;

    const splitBillValue = whoIsPaying === "you" ? paidByFriend : -paidByUser;
    onSplitBill(splitBillValue);
  }

  useEffect(() => {
    setBill("");
    setPaidByUser("");
    setWhoIsPaying("you");
  }, [selectedFriend]);

  return (
    <>
      <form className="form-split-bill" onSubmit={(e) => handleSubmit(e)}>
        <h2>Split Bill with {selectedFriend.name}</h2>
        <label htmlFor="bill">💰 Bill Value:</label>
        <input
          type="number"
          id="bill"
          name="bill"
          value={bill}
          onChange={handleBill}
          required
        />
        <label htmlFor="myId">🧍‍♂️ Your Expense:</label>
        <input
          type="number"
          id="myId"
          name="myId"
          required
          value={paidByUser}
          onChange={handlePaidByUser}
        />
        <label htmlFor="friendId">👫 {selectedFriend.name}'s Expense:</label>
        <input
          type="number"
          id="friendId"
          name="friendId"
          required
          value={paidByFriend}
          disabled
          aria-disabled
        />
        <label htmlFor="selectedId">🤑 Who is paying the bill?</label>
        <select
          className="select"
          value={whoIsPaying}
          onChange={handleWhoIsPaying}
        >
          <option value="you">You</option>
          <option value={selectedFriend.name}>{selectedFriend.name}</option>
        </select>
        <Button>Split Bill</Button>
      </form>
    </>
  );
}
