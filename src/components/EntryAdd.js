import React from "react";
import { useInput } from "../hooks/input-hook";

const EntryAdd = ({ handleNewEntry }) => {
  const { value: entryDate, bind: bindEntryDate } = useInput("");
  const { value: diary, bind: bindDiary } = useInput("");

  const processNewEntry = e => {
    e.preventDefault();
    handleNewEntry({ entryDate, diary });
  };

  return (
    <>
      <form onSubmit={processNewEntry}>
        <div>
        Entry Date:
        <br />
        <input type="date" id="start" name="trip-start" required
       value={Date()} {...bindEntryDate}/>

        <br />
        Diary Entry:
        <br />
        <textarea rows={5} cols={70} {...bindDiary} />
        &nbsp;&nbsp;
        <input type="submit" value="Save" />
        </div>
      </form>
    </>
  );
};

export default EntryAdd;
