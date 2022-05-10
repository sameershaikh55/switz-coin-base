// CSS
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";

// This is a React Router v6 app
import { Switch, Route } from "react-router-dom";

// PAGES
import Home from "./pages/Home";
import ApplyLoan from "./pages/ApplyLoan";
import CryptoCash from "./pages/CryptoCash";
import FixedDeposit from "./pages/FixedDeposit";
import EscrowService from "./pages/EscrowService";
import Dealer from "./pages/Dealer";
import PaymentService from "./pages/PaymentService";
import SubmitPage from "./pages/SubmitPage";

function App() {
  const urls = [
    {
      route: "/",
      page: Home,
    },
    {
      route: "/crypto-loans",
      page: ApplyLoan,
    },
    {
      route: "/crypto-cash",
      page: CryptoCash,
    },
    {
      route: "/fixed-deposits",
      page: FixedDeposit,
    },
    {
      route: "/crypto-escrow",
      page: EscrowService,
    },
    {
      route: "/dealer",
      page: Dealer,
    },
    {
      route: "/payment-services",
      page: PaymentService,
    },
    {
      route: "/submit-thankyou",
      page: SubmitPage,
    },
  ];

  return (
    <Switch>
      {urls.map((item, i) => {
        return <Route key={i} exact path={item.route} component={item.page} />;
      })}
    </Switch>
  );
}

export default App;
