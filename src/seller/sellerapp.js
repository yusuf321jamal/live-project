import { HashRouter, Routes, Route, Link } from "react-router-dom";
import MyDashboard from "./dashboard";
import OrderList from "./orderlist";
import ProductList from "./productlist";
import NewProduct from "./newproduct";
import Category from "./category";
const SellerModule = () => {
  return (
    <HashRouter>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand">
            <i className="fa fa-shopping-bag fa-lg"></i> Seller CRM{" "}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item me-4">
                <Link className="nav-link  active" to="/">
                  <i className="fa fa-dashboard"></i> Dashboard
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link  active" to="/category">
                  <i className="fa fa-database"></i> Category
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link active" to="/new-product">
                  <i className="fa fa-plus"></i> New Product
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link active" to="/productlist">
                  <i className="fa fa-table"></i> Product List
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link active" to="/order">
                  <i className="fa fa-headset"></i> Order List
                </Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link text-warning">
                  Hi,seller One <i className="fa fa-power-off"></i> Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route exact path="/" element={<MyDashboard />} />
        <Route exact path="/category" element={<Category />} />
        <Route exact path="/new-product" element={<NewProduct />} />
        <Route exact path="/productlist" element={<ProductList />} />
        <Route exact path="/order" element={<OrderList />} />
      </Routes>
    </HashRouter>
  );
};

export default SellerModule;
