import Navbar from "../ui/navbar/navbar";
import Sidebar from "../ui/sidebar/sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div>
        <Navbar />
        { children }
      </div>
    </div>
  );
}
