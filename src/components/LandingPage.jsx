import { Outlet } from "react-router-dom";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

export default function LandingPage() {
  return (
    <div>
      <Header />
      <Outlet/>
      <Footer />
    </div>
  );
}
