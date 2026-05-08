import {
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6">
          Campus Notification System
        </Typography>

        <div>
          <Button
            color="inherit"
            component={Link}
            to="/"
          >
            All
          </Button>

          <Button
            color="inherit"
            component={Link}
            to="/priority"
          >
            Priority
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;