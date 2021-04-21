import { Outlet, useNavigate } from "react-router-dom";
import { experimentalStyled } from "@material-ui/core";
import MainNavbar from "./MainNavbar";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const MainLayoutRoot = experimentalStyled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  display: "flex",
  height: "100%",
  overflow: "hidden",
  width: "100%",
}));

const MainLayoutWrapper = experimentalStyled("div")({
  display: "flex",
  flex: "1 1 auto",
  overflow: "hidden",
  paddingTop: 64,
});

const MainLayoutContainer = experimentalStyled("div")({
  display: "flex",
  flex: "1 1 auto",
  overflow: "hidden",
});

const MainLayoutContent = experimentalStyled("div")({
  flex: "1 1 auto",
  height: "100%",
  overflow: "auto",
});

const MainLayout = () => {
  const navigate = useNavigate();
  const userSignin = useSelector((state) => state.userSignin);
  const { authState } = userSignin;

  useEffect(() => {
    let isAdmin = localStorage.getItem("isAdmin");
    if (isAdmin == "false") {
      if (authState) navigate("/app/employeedashboard", { replace: true });
    } else {
      navigate("/app/dashboard", { replace: true });
    }
  }, [authState]);

  return (
    <MainLayoutRoot>
      <MainNavbar />
      <MainLayoutWrapper>
        <MainLayoutContainer>
          <MainLayoutContent>
            <Outlet />
          </MainLayoutContent>
        </MainLayoutContainer>
      </MainLayoutWrapper>
    </MainLayoutRoot>
  );
};
export default MainLayout;
