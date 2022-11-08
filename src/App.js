import './App.css';

function App() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Drawer
          anchor={"right"}
          open={state1}
          onClose={() => toggleDrawer1(false)}
        >
          {list1()}
        </Drawer>
        <Drawer
          anchor={"right"}
          open={state}
          onClose={() => toggleDrawer(false)}
        >
          {list()}
        </Drawer>
        <Toolbar disableGutters className="navbar">
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link to={"/support"}>
              <div>Help</div>
            </Link>
            {/* <Link to={"/"}>Private Route</Link> */}
          </Box>

          {token ? (
            <>
              {/* {()=> toggleDrawer(false)} */}
              <Box
                onClick={handlelogout}
                style={{ cursor: "pointer" }}
                sx={{ flexGrow: 0 }}
              >
                logout
              </Box>
            </>
          ) : (
            // <Link to="/">
            <>
              <Box
                style={{ cursor: "pointer" }}
                sx={{ flexGrow: 0 }}
                onClick={() => toggleDrawer1(true)}
              >
                Login
              </Box>
              {/* <Link to={"/signup"}> */}
              <Box
                className="signup"
                style={{ cursor: "pointer" }}
                sx={{ flexGrow: 0 }}
                onClick={() => toggleDrawer(true)}
              >
                signup
              </Box>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default App;
