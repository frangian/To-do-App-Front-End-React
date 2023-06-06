import { BrowserRouter, Routes, Route } from "react-router-dom";
import TasksContainer from "./components/pages/tasks/TasksContainer";
import LoginContainer from "./components/pages/login/LoginContainer";
import RegisterContainer from "./components/pages/register/RegisterContainer";
import Layout from "./components/layout/layout/Layout";

function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<TasksContainer />} />
              <Route path="/login" element={<LoginContainer />} />
              <Route path="/register" element={<RegisterContainer />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
