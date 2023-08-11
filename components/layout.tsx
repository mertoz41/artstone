import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }: { children: any }) {
  return (
    <>
        <Header />
      <main>
        {children}
      </main>
        <Footer />
    </>
  );
}

export default Layout;
