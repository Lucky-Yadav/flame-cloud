import React from 'react'
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const Manage = () => {
  const fixedOptions = [top100Films[6]];
  const [value, setValue] = React.useState([...fixedOptions, top100Films[13]]);
  return (
    <div>
      <div className="access_popup">
        <h3>SOP Access</h3>
        <div className="sales">
          <h4>Sales</h4>
          <div className="addteam">
            
          </div>
        </div>
        <div className="marketing">
          <h4>Marketing</h4>
        </div>
        <div className="design">
          <h4>Design</h4>
        </div>
      </div>
    </div>
  );
}

export default Manage