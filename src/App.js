import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  AppBar,
  Typography,
  Container,
} from "@mui/material";
import Agent from "./Agent";
import Reports from "./Reports";
import Settings from "./Settings";

function App() {
  return (
    <Router>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap>
            FinOps Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" sx={{ width: 240 }}>
        <Toolbar />
        <List>
          <ListItem button component={Link} to="/agent">
            <ListItemText primary="FinOps Agent" />
          </ListItem>
          <ListItem button component={Link} to="/reports">
            <ListItemText primary="Reports" />
          </ListItem>
          <ListItem button component={Link} to="/settings">
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </Drawer>

      <Container sx={{ marginLeft: 30, marginTop: 10 }}>
        <Routes>
          <Route path="/agent" element={<Agent />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
