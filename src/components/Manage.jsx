import React from 'react'
import Select from './Select';
import { useState } from 'react';
import { Button } from '@mui/material';

const Manage = () => {
  const [openmanage, setopenmanage] = useState(true)
  return (
    <div >
      <div
        className={`access_popup ${openmanage == true ? "" : "hidden"} `}
      >
        <h3>SOP Access</h3>
        <div className="sales">
          <h4>Sales</h4>
          <Select />
        </div>
        <div className="marketing">
          <h4>Marketing</h4>
          <Select />
        </div>
        <div className="design">
          <h4>Design</h4>
          <Select />
        </div>
        <div className="buttons">
        <Button variant="outlined" onClick={() => setopenmanage(false)}>
          Cancel
        </Button>
        <Button variant="contained" onClick={() => setopenmanage(false)}>
          Update
        </Button>
      </div>
      </div>
    
    </div>
  );
}

export default Manage