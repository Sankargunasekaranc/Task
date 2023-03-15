import React, { useState } from "react";
import Segment from "./Segment";
import "./Home.css";

function Home() {
  const [name, setName] = useState("");
  const [schemas, setSchemas] = useState([]);
  const [cnt,upcnt]=useState(1);
  const [schema, setSchema] = useState([{ first_name: "" }, { last_name: "" }]);
  const [availableSchemas, setAvailableSchemas] = useState([
    { label: "First Name", value: "first_name" },
    { label: "Last Name", value: "last_name" },
    { label: "Gender", value: "gender" },
    { label: "Age", value: "age" },
    { label: "Account Name", value: "account_name" },
    { label: "City", value: "city" },
    { label: "State", value: "state" },
  ]);
  const [selectedSchema, setSelectedSchema] = useState(null);
  
  const handleAddSchema = () => {
    if (selectedSchema) {
      setSchemas([...schemas, selectedSchema]);
      setAvailableSchemas(
        availableSchemas.filter((schema) => schema !== selectedSchema)
      );
      setSelectedSchema(null);
    }
  };

  const handleSelectSchema = (schema) => {
    setSelectedSchema(schema);
  };

  const handleResetDropdown = () => {
    setSelectedSchema(null);
  };

  const handleSaveSegment = () => {
    // Send data to server in the desired format
    const segment = { name, schemas };
    // console.log(segment);
    upcnt(cnt+1)
    
    
    var data=segment.schemas;
    

    {data.map((title,i) => {
       console.log("segment_name: ",name)
       console.log("schema",title)
    })}
    <div>
    <div className="accordion" id="accordionExample">
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Segment
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body">
            <Segment data={data} key={cnt}></Segment>
        </div>
      </div>
    </div>
    </div>
    </div>
    
  };

  return (
    <div className="Home">
      <button
        className="btn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        Save Segment
      </button>

      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">Saving Segment</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body new">
          <div>
            <span className="para">Enter the Name of the Segment</span>
            <div className="mt-4 ">
              <input
                type="text"
                className="form-control"
                placeholder="Name of the Segment"
                value={name}
                onChange={(event) => setName(event.target.value)}
              ></input>
            </div>
            <div className="mt-4 para">
              To save your segment, you need to add the schemas to build the
              query
            </div>
            <div className="traits_main">
            <div className="traits">
              <span className="circle1"></span> - User Traits
              <span className="circle2"></span> - Group Traits
            </div>
           
            </div>
            <div className="segments">
              <span className="circle2"></span> 
            </div>
            <div className="row mt-4">
              <div className="col-md-6">
                <div className="dropdown">
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={handleResetDropdown}
                  >
                    {selectedSchema ? selectedSchema.label : "Select Schema"}
                  </button>
                  <ul
                    className={`dropdown-menu ${selectedSchema && "show"}`}
                    aria-labelledby="dropdownMenuButton1"
                  >
                    {availableSchemas.map((schema) => (
                      <li key={schema.value}>
                        <button
                          className="dropdown-item"
                          onClick={() => handleSelectSchema(schema)}
                        >
                          {schema.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <button className="savebtn add" onClick={handleAddSchema}>
                 + Add new schema
                </button>
              </div>
            </div>

            <div className="selectedSchemas">
              {schemas.map((schema) => (
                <Segment key={schema.value} schema={schema} />
              ))}
            </div>

            <button className="btn save" onClick={handleSaveSegment}>
              Save the segment
            </button>
            <button className="btnclose" onClick={()=>{window.location.reload();}}>cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
