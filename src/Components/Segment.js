import React from "react";
import { Accordion } from "react-bootstrap";
import "./Segment.css";

function Segment(props) {
  let temp_arr=[]
  for (const property in props) {
    temp_arr.push(JSON.stringify(props[property].label).replace(/"/g,''))
  }
 
  return (
    <div>
      
 
      {temp_arr.map((title,i) => {
        return <div key={i}>
          <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>{title}</Accordion.Header>
        <Accordion.Body>
          <input type="text" placeholder={title} ></input>
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
        </div>
      })}
    </div>
  );
}

export default Segment;
