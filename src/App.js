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

function App() {
  
  const [state, setState] = React.useState(false);
  const toggleDrawer = (open) => {
    console.log(2);
    setState(open);
  };
   const list = () => (
     <Box className="drawer" sx={{ width: 350 }} role="presentation">
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
              <Button variant="contained">Contained</Button>
              <Button variant="outlined">Outlined</Button>
            </div>
          </div>
          <div className="list">
            <div>
              <Accordion>
               
              </Accordion>
              <Accordion>
               
              </Accordion>
              <Accordion disabled>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography>Disabled Accordion</Typography>
                </AccordionSummary>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
