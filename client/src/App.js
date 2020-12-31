import Header from "./components/Header";
import { useState } from "react";
import { Drawer } from "@material-ui/core";
import SideBar from "./components/SideBar";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";

function App() {
  const [isOpen, setIsopen] = useState(false);

  return (
    <>
      <Header toggler={setIsopen} />
      <Drawer anchor="left" open={isOpen} onClose={() => setIsopen(false)}>
        <SideBar />
      </Drawer>
      <RegisterForm />
      <LoginForm />
    </>
  );
}

export default App;
