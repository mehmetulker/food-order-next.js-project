import "@/styles/globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/footer/Footer";
import SessionWrapper from "@/components/SessionWrapper/SessionWrapper";

import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "Food Ordering App",
  description: "Order your favorite food online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionWrapper>
          <ToastContainer />
          <Header />
          <main>{children}</main>
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
