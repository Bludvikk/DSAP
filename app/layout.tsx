import ClientOnly from "./Components/ClientOnly";
import Footer from "./Components/Navigation/BottomNav/Footer";
import NavigationBar from "./Components/Navigation/BottomNav/NavigationBar";
import LoginModal from "./Components/modal/LoginModal";
import Modal from "./Components/modal/Modal";
import RegisterModal from "./Components/modal/RegisterModal";
import "./globals.css";
import { Rubik } from "next/font/google";
import WriteEventModal from "./Components/modal/EventModal";
import WriteNewsModal from "./Components/modal/NewsModal";
import WriteConventionModal from "./Components/modal/ConventionModal";
import { ClerkProvider } from "@clerk/nextjs";

const font = Rubik({
  subsets: ["latin"],
});

export const metadata = {
  title: "Drugstores Association of the Philippines",
  description: "Created by TheBoredGuys Inside Solutions Corp",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={font.className}>
          <ClientOnly>
            <WriteEventModal />

            <WriteConventionModal />
            <div className="w-full overflow-x-hidden mx-auto">{children}</div>
          </ClientOnly>
        </body>
      </html>
    </ClerkProvider>
  );
}
