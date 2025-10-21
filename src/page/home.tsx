// import dependency
import { type JSX } from "react";

// import component
import Header from "../component/header";
import Landing from "../component/landing";
import Main from "../component/Main";

export default function Home(): JSX.Element {
  return (
    <>
      <Header />
      <Landing />
      <Main />
    </>
  );
}
