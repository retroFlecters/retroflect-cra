import React, { useState } from "react";

const EntryView = ({ entries }) => {

  const [entryIndex, setEntryIndex] = useState(0)
  const [entryArrayLength, setEntryArrayLength] = useState(0)

  function backOne() {
    if (entryIndex > 0) {
      setEntryIndex(entryIndex - 1)
    };
  };

  function forwardOne() {
    if (entryIndex < entryArrayLength) {
      setEntryIndex(entryIndex + 1)
    };
  };

  function formatDate(date) {
    let postDate = new Date(date);
    return postDate.toLocaleDateString()
  }

  const ExtractEntry = ({ entries }) => {

    if (entries.length !== 0) {

      const entryArray = entries.map(entry => entry);
      setEntryArrayLength(entryArray.length - 1);

      const singleEntry = entryArray[entryIndex];

      return (
        <div>
        Entry Date:
        <br />
        <textarea readOnly rows={1} cols={50} value={formatDate(singleEntry.entryDate)} />
        <br />
        Diary Entry:
        <br />
        <textarea readOnly rows={5} cols={70} value={singleEntry.diary} />
        </div>
      )} else {return ""}
  };

  return (
    <div>
      <ExtractEntry entries={entries}></ExtractEntry>
      <br />
      <button onClick={backOne}>Back</button>
      <button onClick={forwardOne}>Forward</button>
      <br />
    </div>
  );

};

export default EntryView;
