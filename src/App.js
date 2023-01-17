import { Route, Routes } from "react-router-dom";
import { AppLayout, AuthLayout } from "./scenes/global/Layout";
import Login from "./scenes/authentication/login";
import SignIn from "./scenes/authentication/sigin";
import Dashboard from "./scenes/dashboard";
// import Sidebar from "./scenes/global/Sidebar";
// import Team from "./scenes/Team";
// import Invoices from "./scenes/Invoices";
// import Contacts from "./scenes/Contacts";


function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout/>}>
        <Route index path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="/" element={<AuthLayout />}>
        <Route index path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;