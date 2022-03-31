import React from "react";
import "./SearchEngine.css";
export default function SearchEngine() {
  return (
    <form className="search-form">
      <div className="row">
        <label htmlFor="search-engine" className="label">
          Search for another city
        </label>
      </div>
      <div className="row">
        <div className="col-10">
          <input type="text" className="form-control" id="search-engine" />
        </div>

        <div className="col-2">
          <input
            type="submit"
            value="search"
            className="form-control btn btn-primary"
          />
        </div>
      </div>
    </form>
  );
}
