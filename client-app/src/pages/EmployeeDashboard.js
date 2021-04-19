import { Helmet } from "react-helmet";
import { Box, Container, Grid, Button } from "@material-ui/core";
import Budget from "src/components/dashboard//Budget";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import LatestOrders from "src/components/dashboard//LatestOrders";
import LatestProducts from "src/components/dashboard//LatestProducts";
import Sales from "src/components/dashboard//Sales";
import TasksProgress from "src/components/dashboard//TasksProgress";
import TotalCustomers from "src/components/dashboard//TotalCustomers";
import TrafficByDevice from "src/components/dashboard//TrafficByDevice";
import {
  getDashboardData,
  clockInEmployee,
} from "src/services/dashboardService";

const EmployeeDashboard = () => {
  const dispatch = useDispatch();
  const dashboardData = useSelector((state) => state.dashboardData);
  const { loading, dashboard } = dashboardData;

  useEffect(() => {
    dispatch(getDashboardData());
  }, []);

  return (
    <>
      <Helmet>
        <title>Dashboard | Employee </title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: "background.default",
          minHeight: "100%",
          py: 3,
        }}
      >
        <Container maxWidth={false}>
          <Grid container spacing={3} top={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                dispatch(clockInEmployee());
              }}
            >
              Clock In
            </Button>
            &nbsp;&nbsp;
            <Button variant="contained" color="primary">
              Clock Out
            </Button>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default EmployeeDashboard;
