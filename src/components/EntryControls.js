import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core'
import {faChevronLeft,  faChevronRight, faCalendarAlt, faPlus, faEdit} from '@fortawesome/free-solid-svg-icons'

const EntryControls = () => {
  return (
    <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
      <div className="btn-group mr-2" role="group" aria-label="First group">
        <button type="button" className="btn btn-secondary"><FontAwesomeIcon icon={faChevronLeft} /></button>
        <button type="button" className="btn btn-secondary"><FontAwesomeIcon icon={faChevronRight} /></button>
        <button type="button" className="btn btn-secondary"><FontAwesomeIcon icon={faCalendarAlt} /></button>
      </div>
      <div className="btn-group mr-2" role="group" aria-label="Second group">
        <button type="button" className="btn btn-secondary"><FontAwesomeIcon icon={faPlus} /></button>
        <button type="button" className="btn btn-secondary"><FontAwesomeIcon icon={faEdit} /></button>
      </div>
    </div>
  );
};

export default EntryControls;
