import axios from "axios";
import {
  DASHBOARD_DATA_LOADING,
  DASHBOARD_DATA_SUCCESS,
  DASHBOARD_DATA_ERROR,
} from "../utils/constants/dashboardConstants";
const accessToken = localStorage.getItem("access_token");

const getDashboardData = () => async (dispatch) => {
  dispatch({
    type: DASHBOARD_DATA_LOADING,
  });
  try {
    const { data } = await axios.get("/api/v1/panel/dashboard/get", {
      headers: {
        Authorization: accessToken,
      },
    });
    dispatch({ type: DASHBOARD_DATA_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({
      type: DASHBOARD_DATA_ERROR,
      payload: error.response.data.message,
    });
  }
};

const clockInEmployee = (isClockIn) => async (dispatch) => {
  var userData = JSON.parse(localStorage.getItem("userData"));
  let requestData = {
    employee: userData.id,
    isClockedIn: isClockIn,
  };
  dispatch({
    type: DASHBOARD_DATA_LOADING,
  });
  try {
    const { data } = await axios.post(
      "/api/v1/panel/clocked/add",
      requestData,
      {
        headers: {
          Authorization: accessToken,
        },
      }
    );
    dispatch({ type: DASHBOARD_DATA_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({
      type: DASHBOARD_DATA_ERROR,
      payload: error.response.data.message,
    });
  }
};

export { getDashboardData, clockInEmployee };
