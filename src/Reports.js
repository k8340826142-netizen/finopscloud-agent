import React from "react";
import { Card, CardContent, Typography, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

function Reports() {
  const data = [
    { date: "2026-09-01", idleVMs: 5, savings: "$120" },
    { date: "2026-09-02", idleVMs: 3, savings: "$80" },
    { date: "2026-09-03", idleVMs: 6, savings: "$150" },
  ];

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Daily Reports</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Idle VMs</TableCell>
              <TableCell>Estimated Savings</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.idleVMs}</TableCell>
                <TableCell>{row.savings}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default Reports;
