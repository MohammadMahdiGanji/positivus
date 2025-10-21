// import dependency
import { type JSX } from "react";

// import component
import Header from "../component/header";
import Landing from "../component/landing";

export default function Home(): JSX.Element {
  return (
    <>
      <Header />
      <Landing />
    </>
  );
}
