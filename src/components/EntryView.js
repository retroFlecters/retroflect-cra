import React, { useState } from "react";
import EntryControls from "./EntryControls"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronLeft,  faChevronRight, faCalendarAlt, faPlus, faEdit} from '@fortawesome/free-solid-svg-icons'

const EntryView = ({ entries }) => {

  const [entryIndex, setEntryIndex] = useState(0)
  const [entryArrayLength, setEntryArrayLength] = useState(0)

  function backOne() {
    if (entryIndex > 0) {
      setEntryIndex(entryIndex - 1)
    } else {alert("No older entries");}
  };

  function forwardOne() {
    if (entryIndex < entryArrayLength) {
      setEntryIndex(entryIndex + 1)

    } else {alert("No newer entries");}
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

      <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
        <div className="btn-group mr-2" role="group" aria-label="First group">
          <button type="button" className="btn btn-secondary"><FontAwesomeIcon icon={faChevronLeft} onClick={backOne}/></button>
          <button type="button" className="btn btn-secondary"><FontAwesomeIcon icon={faChevronRight} onClick={forwardOne}/></button>
          <button type="button" className="btn btn-secondary"><FontAwesomeIcon icon={faCalendarAlt} /></button>
        </div>
        <div className="btn-group mr-2" role="group" aria-label="Second group">
          <button type="button" className="btn btn-secondary"><FontAwesomeIcon icon={faPlus} /></button>
          <button type="button" className="btn btn-secondary"><FontAwesomeIcon icon={faEdit} /></button>
        </div>
      </div>
    </div>
  );
};

export default EntryView;
