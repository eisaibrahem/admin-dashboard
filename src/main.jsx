import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ManageTeam from "./pages/manageTeam/ManageTeam.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Invoices from "./pages/invoices/Invoices.jsx";
import ProfileForm from "./pages/profileForm/ProfileForm.jsx";
import FAQ from "./pages/faqPage/FAQ.jsx";
import BarChart from "./pages/barChart/BarChart.jsx";
import PieChart from "./pages/pieChart/PieChart.jsx";
import LineChart from "./pages/LineChart/LineChart.jsx";
import Geography from "./pages/geography/Geography.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Calender from "./pages/calender/Calender.jsx";
import Error404 from "./pages/Error404/Error404.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="team" element={<ManageTeam />} />
      <Route path="contacts" element={<Contact />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="form" element={<ProfileForm />} />
      <Route path="calender" element={<Calender />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="bar" element={<BarChart isDashboard={false} />} />
      <Route path="pie" element={<PieChart isDashboard={false} />} />
      <Route path="line" element={<LineChart isDashboard={false} />} />
      <Route path="geography" element={<Geography isDashboard={false} />} />
      <Route path="*" element={<Error404 />} />

      {/* <Route path="dashboard" element={<Dashboard />} /> */}
      {/* ... etc. */}
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
