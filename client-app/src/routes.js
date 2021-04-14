import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/components/DashboardLayout';
import MainLayout from 'src/components/MainLayout';
import Account from 'src/pages/Account';
import Dashboard from 'src/pages/Dashboard';
import Register from 'src/pages/Register';
import Login from 'src/pages/Login';
import NotFound from 'src/pages/NotFound';
import ProductList from 'src/pages/ProductList';
import Settings from 'src/pages/Settings';
import EmployeeAdd from './components/customer/EmployeeAdd';
import EmployeeList from './pages/EmployeeList';
import EmployeeListDashboard from './components/customer/EmployeeListDashboard';
const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <Account /> },
      { path: 'employees', element: <EmployeeList /> },
      { path: 'addemployee', element: <EmployeeAdd /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'products', element: <ProductList /> },
      { path: 'settings', element: <Settings /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register />},
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/login" /> },
      // { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
