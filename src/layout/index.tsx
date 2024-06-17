import Footer from "./footer";
import Navbar from "./navbar";

interface ILayout {
  children: React.ReactNode;
}
const Layout = ({ children }: ILayout) => {
  return (
    <div>
      <Navbar />
     <div> {children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
