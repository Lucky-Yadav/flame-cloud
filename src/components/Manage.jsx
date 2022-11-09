import React from 'react'
import Select from './Select';

const Manage = () => {
  return (
    <div>
      <div className="access_popup">
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
      </div>
    </div>
  );
}

export default Manage