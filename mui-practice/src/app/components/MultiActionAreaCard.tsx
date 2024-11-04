"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid2";

export default function MultiActionAreaCard() {
  const managers = [
    {
      managerId: 1,
      name: "Alice Johnson",
      department: "Engineering",
      employees: [
        { employeeId: 101, name: "Tom Harris", position: "Software Engineer" },
        { employeeId: 102, name: "Lisa Chen", position: "Data Analyst" },
        {
          employeeId: 103,
          name: "Carlos Mendez",
          position: "Backend Developer",
        },
      ],
    },
    {
      managerId: 2,
      name: "Brian Smith",
      department: "Marketing",
      employees: [
        {
          employeeId: 201,
          name: "Sarah Parker",
          position: "Content Strategist",
        },
        { employeeId: 202, name: "David Lee", position: "SEO Specialist" },
        {
          employeeId: 203,
          name: "Emma Brown",
          position: "Social Media Manager",
        },
      ],
    },
    {
      managerId: 3,
      name: "Catherine Nguyen",
      department: "Sales",
      employees: [
        { employeeId: 301, name: "Raj Patel", position: "Account Executive" },
        {
          employeeId: 302,
          name: "Maria Sanchez",
          position: "Sales Coordinator",
        },
        {
          employeeId: 303,
          name: "Kevin Tran",
          position: "Sales Representative",
        },
      ],
    },
    {
      managerId: 4,
      name: "Daniel Garcia",
      department: "Human Resources",
      employees: [
        { employeeId: 401, name: "Nina Thomas", position: "Recruiter" },
        { employeeId: 402, name: "Oliver Wright", position: "HR Coordinator" },
        { employeeId: 403, name: "Sophia Kim", position: "HR Generalist" },
      ],
    },
    {
      managerId: 5,
      name: "Emily Davis",
      department: "Finance",
      employees: [
        {
          employeeId: 501,
          name: "Michael Brooks",
          position: "Financial Analyst",
        },
        { employeeId: 502, name: "Samantha Evans", position: "Accountant" },
        { employeeId: 503, name: "James Wilson", position: "Controller" },
      ],
    },
    {
      managerId: 6,
      name: "Frank Miller",
      department: "IT Support",
      employees: [
        { employeeId: 601, name: "Lucas Rivera", position: "IT Technician" },
        { employeeId: 602, name: "Amy Jackson", position: "Network Engineer" },
        {
          employeeId: 603,
          name: "Jake Nelson",
          position: "System Administrator",
        },
      ],
    },
    {
      managerId: 7,
      name: "Grace Lee",
      department: "Operations",
      employees: [
        {
          employeeId: 701,
          name: "Chloe Fisher",
          position: "Operations Specialist",
        },
        {
          employeeId: 702,
          name: "Ryan Bennett",
          position: "Logistics Coordinator",
        },
        {
          employeeId: 703,
          name: "Sophia Adams",
          position: "Warehouse Manager",
        },
      ],
    },
  ];

  return (
    <Grid container spacing={2}>
      {managers.map((manager, index) => (
        <Grid size={4} key={index}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {manager.name}
                </Typography>
                <Typography variant="h6">Employees:</Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {manager.employees.map((name) => name.name)}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
