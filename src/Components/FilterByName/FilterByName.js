import React from "react";
import "./FilterByName.css";
import { Form } from "react-bootstrap";


const FilterByName = ({setInputSearch}) => {
  return (
    <div className="FilterByName">
      <Form>
          <Form.Control type="text" placeholder="Search" className ="inputFilter"
          onChange={(e)=> setInputSearch(e.target.value) }/>
      </Form>
    </div>
  );
};

export default FilterByName;
