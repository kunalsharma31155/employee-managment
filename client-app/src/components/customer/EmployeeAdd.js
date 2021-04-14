import { useState } from 'react';
import axios from "axios";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@material-ui/core';

const EmployeeAdd = (props) => {
  const [values, setValues] = useState({
    name:'',
    email:'',
    country:'',
    city:'',
    jobDescription:'',
    weeklyPerformance:'',
    password: ''
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const onSubmit  = async () => {
    const res = await axios({
      method: 'post',
      url: '/api/v1/panel/employee/add',
      data : values
    });
  }

  return (
    <form {...props}>
      <Card>
        <CardHeader
          subheader="Add employee"
          title="Employees"
        />
        <Divider />
        <CardContent>
        <Grid
              item
              md={6}
              xs={12}
            >
          <TextField
            
            label="Employee Name"
            margin="normal"
            name="name"
            onChange={handleChange}
            type="text"
            value={values.name}
            variant="outlined"
          />
          </Grid>
          <Grid
              item
              md={6}
              xs={12}
            >
          <TextField
            
            label="email"
            margin="normal"
            name="email"
            onChange={handleChange}
            type="email"
            value={values.email}
            variant="outlined"
          />
          </Grid>
          <Grid
              item
              md={6}
              xs={12}
            >
          <TextField
            
            label="Country"
            margin="normal"
            name="country"
            onChange={handleChange}
            type="text"
            value={values.country}
            variant="outlined"
          />
          </Grid>
          <Grid
              item
              md={6}
              xs={12}
            >
          <TextField
            
            label="City"
            margin="normal"
            name="city"
            onChange={handleChange}
            type="text"
            value={values.city}
            variant="outlined"
          />
          </Grid>
          <Grid
              item
              md={6}
              xs={12}
            >
          <TextField
            
            label="Job Description"
            margin="normal"
            name="jobDescription"
            onChange={handleChange}
            type="text"
            value={values.jobDescription}
            variant="outlined"
          />
          </Grid>
          <Grid
              item
              md={6}
              xs={12}
            >
          <TextField
            
            label="Weekly Performance"
            margin="normal"
            name="weeklyPerformance"
            onChange={handleChange}
            type="text"
            value={values.weeklyPerformance}
            variant="outlined"
          />
          </Grid>
        <Grid
              item
              md={6}
              xs={12}
            >
          <TextField
        
            label="Password"
            margin="normal"
            name="password"
            onChange={handleChange}
            type="password"
            value={values.password}
            variant="outlined"
          />
          </Grid>
          {/* <Grid
              item
              md={6}
              xs={12}
            >
          <TextField
            
            label="Confirm password"
            margin="normal"
            name="confirm"
            onChange={handleChange}
            type="password"
            value={values.confirm}
            variant="outlined"
          />
          </Grid> */}
             {/* <TextField
            fullWidth
            label="Password"
            margin="normal"
            name="password"
            onChange={handleChange}
            type="password"
            value={values.password}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Confirm password"
            margin="normal"
            name="confirm"
            onChange={handleChange}
            type="password"
            value={values.confirm}
            variant="outlined"
          /> */}
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
            onClick = {() => onSubmit()}
          >
            Add 
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default EmployeeAdd;
