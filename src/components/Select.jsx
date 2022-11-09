import React from 'react'
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const Select = () => {
  const Students = [
    { title: "Aryan -Tanwar" },
    { title: "Karan" },
    { title: "Sandeep" },
    { title: "Manoj Kumar" },
  ];
  const fixedOptions = [];
  const [value, setValue] = React.useState([...fixedOptions, Students[2]]);
  return (
    <div className="addteam">
      <Autocomplete
        multiple
        id="checkboxes-tags-demo"
        options={Students}
        disableCloseOnSelect
        getOptionLabel={(option) => option.title}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option.title}
          </li>
        )}
        style={{ width: 500 }}
        renderInput={(params) => (
          <TextField {...params} label="TEAMMATES" placeholder="Add Teammates" />
        )}
      />
    </div>
  );
}

export default Select