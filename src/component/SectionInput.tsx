import React from "react";
import InputGroup from "./InputGroup";
import InputPriority from "./InputPriority";
import InputSearch from "./InputSearch";
import Warning from "./Warning";

function SectionInput() {
  return (
    <div className="container mx-auto">
      <InputGroup>
        <InputSearch />
        <InputPriority />
        <Warning />
      </InputGroup>
    </div>
  );
}

export default SectionInput;
