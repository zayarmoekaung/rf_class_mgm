import Layout from '../components/Layout';
import passport from '../../utils/auth';

function Dashboard() {
  return (
    <Layout>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard!</p>
    </Layout>
  );
}

export default checkAuth(Dashboard);
