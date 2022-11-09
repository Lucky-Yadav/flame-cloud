import './App.css';
import * as React from "react";
import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddIcon from "@mui/icons-material/Add";
import PeopleIcon from "@mui/icons-material/People";
import Manage from './components/Manage';
import TextField from "@mui/material/TextField";

function App() {
  
  const [state, setState] = React.useState(false);
  const [newplanname, setnewplanname] = useState("")
  const [key, setkey] = useState(2)
  const toggleDrawer = (open) => {
    console.log(2);
    setState(open);
  };
 
  
  const [planlist, setplanlist] = useState([{
    category: "Marketing",
    key:1,
  }, {
    category: "wordpress",
    key:2,
    }])
  console.log(planlist)
  // const actionplans = [...planlist]
  const createplan = () => {
    const newlist = {
      category: newplanname,
      key: key + 1,
    };

    planlist.push(newlist)
    setState({...planlist})
  };
  console.log(planlist);
  const createplans = () => (
    <div className="newplan">
      <h4>Plan Name</h4>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus,
        sed. Odit at suscipit cumque fugiatur consequuntur id!
      </p>

      <TextField id="outlined-basic" onChange={(e) => setnewplanname(e.target.value)} label="Name Your Plan" variant="outlined" />
    </div>
  );
  
  return (
    <>
      <div className="body">
        <div className="popup1">
          <div className="createnewplan">
            {createplans()}
          </div>
          
          <Manage />
        </div>
        <div className="jss1">
          <p>SOP</p>
          <div className="tab">
            <div className="lefta">
              <h5>Action Plans</h5>
            </div>
            <div className="righta">
              <Button variant="outlined" className="button butn1">
                {" "}
                <PeopleIcon /> Manage Access
              </Button>
              <Button className="button butn2" variant="contained" onClick={()=> createplan()}> 
                <AddIcon /> New Plan
              </Button>
            </div>
          </div>
           
          <div className="list">
            {planlist?.map((item) => (
              <div key={item.key}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={
                      <>
                        <ExpandMoreIcon />
                      </>
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <div className="jss2">
                      <Typography>{item.category}</Typography>
                      <MoreVertIcon className="verticon" />
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>MoreVertIcon</Typography>
                      </AccordionSummary>
                      <AccordionDetails></AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                      <Typography>{item.category}</Typography>
                      </AccordionSummary>
                      <AccordionDetails></AccordionDetails>
                    </Accordion>
                  </AccordionDetails>
                </Accordion>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
