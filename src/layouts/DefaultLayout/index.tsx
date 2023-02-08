import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { LayoutContainer } from "./styles";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Summary />
      <Outlet />
    </LayoutContainer>
  );
}
