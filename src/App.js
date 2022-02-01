import { ApolloProvider } from "@apollo/client";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./Components/Common/Header/Header";
import Sidebar from "./Components/Common/Sidebar/Sidebar";
import { client } from "./GraphQL/GraphQL";
import Authentication from "./pages/Authentication";
import Orders from "./pages/Orders";
import Outbound from "./pages/Outbound";
import PFIW from "./pages/PFIW";
import Received from "./pages/Received";
import SearchPage from "./pages/SearchPage";
import ShippingPassed from "./pages/ShippingPassed";
import ShippingReturned from "./pages/ShippingReturned";

function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Sidebar />
      <main className="main-wrapper">
        <div className="container-fluid">
          <Routes>
            <Route path="/" element={<Navigate to="/orders" />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/received" element={<Received />} />
            <Route path="/authentication" element={<Authentication />} />
            <Route path="/pfiw" element={<PFIW />} />
            <Route path="/Shipping/passed" element={<ShippingPassed />} />
            <Route path="/Shipping/returned" element={<ShippingReturned />} />
            <Route path="/outbound" element={<Outbound />} />
            <Route path="/search/:id" element={<SearchPage />} />
          </Routes>

        </div>
      </main>
    </ApolloProvider>
  );
}

export default App;
