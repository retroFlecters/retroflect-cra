import React from "react";

const EntryView = ({ entries }) => {
  return (
    <div>
      {JSON.stringify(entries)}
    </div>
  );
};

export default EntryView;
