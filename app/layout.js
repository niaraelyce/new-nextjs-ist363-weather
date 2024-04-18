import Header from "../components/Header";
import "../sass/global.scss";

export const metadata = {
  title: "IST 363 Weather App",
  description: "A project for IST 363 practicing React & API calls.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
