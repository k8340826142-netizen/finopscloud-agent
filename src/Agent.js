import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import { Line } from "react-chartjs-2";

function Agent() {
  const chartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Idle VMs",
        data: [5, 3, 8, 2, 6],
        borderColor: "rgba(75,192,192,1)",
        fill: false,
      },
    ],
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h5">Idle VM Summary</Typography>
            <Typography variant="body1">Detected 6 idle VMs today.</Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h5">Idle VM Trend</Typography>
            <Line data={chartData} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Agent;
