const statusCode = require("../../utils/statusCodes");
const sendRes = require("../../utils/response");
const employeeService = require("../services/employeeService");
const clockedService = require("../services/clockedService");

async function getDashboardData(req, res, next) {
  try {

   const now = new Date();
   const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
   const before = new Date(now.getFullYear(), now.getMonth(), now.getDate()-1);
   const after = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

    var clockedInCount= await clockedService.countDocument({isClockedIn:true });
    var clockedOutCount= await clockedService.countDocument({isClockedIn:false });
    var employeeCount = await employeeService.countDocument();

   var TodayClockedInCount= await clockedService.countDocument({isClockedIn:true,createdAt: {$lt: after , $gt:before} });
   var TodayClockedOutCount= await clockedService.countDocument({isClockedIn:false,createdAt: {$lt: after , $gt:before} });

   var dashboardData= {clockedInCount ,clockedOutCount ,employeeCount,TodayClockedInCount,TodayClockedOutCount};
    sendRes(req, res, statusCode.SUCCESS, "", dashboardData);
  } catch (error) {
    next(error);
  }
}

module.exports.getDashboardData = getDashboardData;