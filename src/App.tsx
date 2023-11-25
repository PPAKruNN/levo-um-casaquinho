import { Navigate, Outlet, useLocation } from "react-router-dom"
import { MainStyle, ResetStyle } from "./style"
import styled from "styled-components";
import { ControlPanel } from "./components/control-panel";

function App() {

  const location = useLocation();
  if(location.pathname === "/") Navigate({ to: "/today", replace: true });

  return (
    <>
      <MainStyle/>
      <ResetStyle/>

      <Content>
        <ControlPanel/>
        <Outlet/>
      </Content>
    </>
  )
}

const Content = styled.div`
  height: 100vh;
  display: flex;
`

export default App
