import React, { useState } from "react";
import { Card, CardContent, Typography, TextField, Button } from "@mui/material";

function Settings() {
  const [threshold, setThreshold] = useState(30);

  const handleSave = () => {
    alert(`Idle VM threshold saved: ${threshold} minutes`);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Settings</Typography>
        <TextField
          label="Idle VM Threshold (minutes)"
          type="number"
          value={threshold}
          onChange={(e) => setThreshold(e.target.value)}
          sx={{ mt: 2, mb: 2 }}
        />
        <Button variant="contained" onClick={handleSave}>
          Save
        </Button>
      </CardContent>
    </Card>
  );
}

export default Settings;
