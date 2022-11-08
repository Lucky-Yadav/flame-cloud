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

function App() {
  
  const [state, setState] = React.useState(false);
  const toggleDrawer = (open) => {
    console.log(2);
    setState(open);
  };
   const list = () => (
     <Box className="drawer" sx={{ width: 450 ,height: 350}} role="presentation">
       <div className="drawer_main">
         <div className="manage_access">
         <h5>SOP Access</h5>
       </div>
       </div>
       
     </Box>
   );
  
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Drawer
            anchor={"right"}
            open={state}
            onClose={() => toggleDrawer(false)}
          >
            {list()}
          </Drawer>
          <Toolbar disableGutters className="navbar">
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              right
            </Box>

            <Box
              className="signup"
              style={{ cursor: "pointer" }}
              sx={{ flexGrow: 0 }}
              onClick={() => toggleDrawer(true)}
            >
              signup
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <div className="body">
        <div className="jss1">
          <p>SOP</p>
          <div className="tab">
            <div className="lefta">
              <h5>Action Plans</h5>
            </div>
            <div className="righta">
              <Button variant="outlined" className='button butn1'> <PeopleIcon/> Manage Access</Button>
              <Button className='button butn2' variant="contained">
                <AddIcon /> New Plan
              </Button>
            </div>
          </div>
          <div className="list">
            <div>
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
                    <Typography>Marketing</Typography>
                    <MoreVertIcon className='verticon'/>
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
                      <Typography>Marketing</Typography>
                    </AccordionSummary>
                    <AccordionDetails></AccordionDetails>
                  </Accordion>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Wordpress</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography></Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
