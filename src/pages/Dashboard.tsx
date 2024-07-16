import AllProducts from "../components/AllProducts";
import Header from "../components/Header";
import Filters from "../components/Filters";

const Dashboard = () => {
  return (
    <div className="text-white font-bold text-2xl">
      <Header />

      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <Filters />

        <AllProducts />
      </div>
    </div>
  );
};

export default Dashboard;
