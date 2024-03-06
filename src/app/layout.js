import { ThemeProvider } from "@mui/system";
import './ui/globals.css';

export const metadata = {
  title: "Echo-Watch",
  description: "Echo-Watch Webapp",
};


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      
    >
      <body>{children}</body>
    </html>
  );
}
