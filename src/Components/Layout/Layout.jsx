import { Header } from "../Header/Header";
import { ContainerBox } from "../Container/Container.styled";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { LayoutBox } from "./Layout.styled";

export const Layout = () => {
  return (
    <LayoutBox>
      <ContainerBox>
        <Header />
      </ContainerBox>
      <Suspense fallback={<></>}>
        <Outlet />
      </Suspense>
    </LayoutBox>
  );
};
