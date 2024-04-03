import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import About from "./pages/About/About";
import ErrorPage from "./pages/ErrorPage/ErrorPage.tsx";
import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

import { AuthProvider } from "./context/AuthContext.tsx";

import { Toaster } from "./components/ui/toaster.tsx";
import Payment from "./pages/Payment/Payment.tsx";

import Help from "./pages/Help/Help.tsx";
import ContactPage from "./pages/contact/contact.tsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route path="" element={<App />} />
            <Route path="about" element={<About />} />

            <Route path="help" element={<Help />} />

            <Route path="plans" element={<Payment />} />

            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <AuthProvider>
            <Toaster />
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
);

// {
//   "message": "OK",
//   "name": "bhattad Parth",
//   "email": "bhattadparth1420@gmail.com",
//   "role": "superadmin"
// }

// {
//   "name":"bhattad Parth",
//   "password":"bhattadparth20",
//   "email":"bhattadparth142024@gmail.com"
// }
