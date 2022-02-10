import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({name, options}) {
  const [age, setAge] = React.useState('');

  // console.log(options)
  // console.log(name)

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
        <h3>{name}</h3>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{name}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
            {options.map((p, index) => (
                <MenuItem value={30}>{p.option}</MenuItem>
            ))}

        </Select>
      </FormControl>
    </Box>
  );
}
