import React from "react";

const EntryView = ({ entries }) => {

  const entryDiary = entries.map(entry => entry.diary)
  const entryDate = entries.map(entry => entry.entryDate)

  return (
    <div>
    Entry Date:
    <br />
      <textarea rows={1} cols={50} value={FormatDate(entryDate[entryDate.length -1])} />
      <br />
      Diary Entry:
      <br />
      <textarea rows={10} cols={100} value={entryDiary[entryDiary.length - 1]} />
    </div>
  );

};

const FormatDate = (date) => {
  let postDate = new Date(date);
  return postDate.toLocaleDateString()
};

export default EntryView;
