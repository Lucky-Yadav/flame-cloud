import React from 'react'
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const Select = () => {
  const Students = [
    { title: "Aryan -Tanwar" },
    { title: "Karan" },
    { title: "Sandeep" },
    { title: "Manoj Kumar" },
  ];
  const fixedOptions = [Students[0]];
  const [value, setValue] = React.useState([...fixedOptions, Students[2]]);
  return (
    <div className="addteam">
      <Autocomplete
        multiple
        id="fixed-tags-demo"
        value={value}
        onChange={(event, newValue) => {
          setValue([
            ...fixedOptions,
            ...newValue.filter((option) => fixedOptions.indexOf(option) === -1),
          ]);
        }}
        options={Students}
        getOptionLabel={(option) => option.title}
        renderTags={(tagValue, getTagProps) =>
          tagValue.map((option, index) => (
            <Chip
              label={option.title}
              {...getTagProps({ index })}
              // disabled={fixedOptions.indexOf(option) !== -1}
            />
          ))
        }
        style={{ width: 500 }}
        renderInput={(params) => (
          <TextField {...params} label="TEAMMATES" placeholder="Add Teammates" />
        )}
      />
    </div>
  );
}

export default Select