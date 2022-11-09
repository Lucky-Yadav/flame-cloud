import React from 'react'
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const Manage = () => {
  const top100Films = [
    { title: "Singin' in the Rain", year: 1952 },
    { title: "Toy Story", year: 1995 },
    { title: "Bicycle Thieves", year: 1948 },
    { title: "The Kid", year: 1921 },
    { title: "Inglourious Basterds", year: 2009 },
    { title: "Snatch", year: 2000 },
    { title: "3 Idiots", year: 2009 },
    { title: "Monty Python and the Holy Grail", year: 1975 },
  ];
  const fixedOptions = [top100Films[6]];
  const [value, setValue] = React.useState([...fixedOptions, top100Films[2]]);
  return (
    <div>
      <div className="access_popup">
        <h3>SOP Access</h3>
        <div className="sales">
          <h4>Sales</h4>
          <div className="addteam">
            <Autocomplete
              multiple
              id="fixed-tags-demo"
              value={value}
              onChange={(event, newValue) => {
                setValue([
                  ...fixedOptions,
                  ...newValue.filter(
                    (option) => fixedOptions.indexOf(option) === -1
                  ),
                ]);
              }}
              options={top100Films}
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
                <TextField
                  {...params}
                  label="Fixed tag"
                  placeholder="Favorites"
                />
              )}
            />
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
  const top100Films = [
    { title: "Singin' in the Rain", year: 1952 },
    { title: "Toy Story", year: 1995 },
    { title: "Bicycle Thieves", year: 1948 },
    { title: "The Kid", year: 1921 },
    { title: "Inglourious Basterds", year: 2009 },
    { title: "Snatch", year: 2000 },
    { title: "3 Idiots", year: 2009 },
    { title: "Monty Python and the Holy Grail", year: 1975 },
  ];

export default Manage