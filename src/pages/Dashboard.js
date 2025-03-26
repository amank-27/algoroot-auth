import Navbar from '../components/Dashboard/Navbar';
import Sidebar from '../components/Dashboard/Sidebar';
import DataTable from '../components/Dashboard/DataTable';

export default function DashboardPage() {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="content">
        <Sidebar activePage="details" />
        <main className="main">
          <h1>Details</h1>
          <DataTable />
        </main>
      </div>
    </div>
  );
}