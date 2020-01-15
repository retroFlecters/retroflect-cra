import React from "react";

const EntryView = ({ entries }) => {

  return (
    <div>
      <ExtractEntry entries={entries}></ExtractEntry>
    </div>
  );

};

const count = 0

const ExtractEntry = ({ entries }) => {
  const entryArray = entries.map(entry => entry)
  const singleEntry = entryArray[count];
  if (singleEntry != undefined) {
    return (
      <div>
      Entry Date:
      <br />
      <textarea readOnly rows={1} cols={50} value={FormatDate(singleEntry.entryDate)} />
      <br />
      Diary Entry:
      <br />
      <textarea readOnly rows={10} cols={100} value={singleEntry.diary} />
      </div>
    );
  };
return ""
};

const FormatDate = (date) => {
  let postDate = new Date(date);
  return postDate.toLocaleDateString()
};

export default EntryView;
