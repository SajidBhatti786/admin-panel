import logo from "./logo.svg";
import "./App.css";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/dashboard/gloabal/Topbar";
import Sidebar from "./scenes/dashboard/gloabal/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/Team";
import Invoices from "./scenes/Invoices";
import Contact from "./scenes/Constact";
import Bar from "./components/Bar";
import Form from "./scenes/Form";
import Line from "./scenes/Line";
import Pie from "./scenes/Pie";
import Faq from "./scenes/Faq";
import Geography from "./scenes/Geography";
import Calendar from "./scenes/Calendar";
import { useState } from "react";
function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/form" element={<Form />} />
              <Route path="/line" element={<Line />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/calendar" element={<Calendar />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
