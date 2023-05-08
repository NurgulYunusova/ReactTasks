import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import UsersPosts from "./pages/UsersPosts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/posts/:id" element={<UsersPosts />} />
      </Routes>
    </>
  );
}

export default App;
