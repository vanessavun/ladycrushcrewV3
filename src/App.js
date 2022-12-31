import { useEffect, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { GlobalStyle } from "./global.styles";
import { checkUserSession } from "./store/user/user.action";
import { useDispatch } from "react-redux";
import Spinner from "./components/spinner/spinner.component";

const Home = lazy(() => import("./routes/home/home.component"));
const Navigation = lazy(() => import("./routes/navigation/navigation.component"));
const Authentication = lazy(() => import("./routes/authentication/authentication.component"));
const Shop = lazy(() => import("./routes/shop/shop.component"));
const CheckOut = lazy(() => import("./routes/checkout/checkout.component"));
const About = lazy(() => import("./routes/about/about.component"));
const Events = lazy(() => import("./routes/events/events.component"));
const Volunteer = lazy(() => import("./routes/volunteer/volunteer.component"));
const Contact = lazy(() => import("./routes/contact/contact.component"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="events" element={<Events />} />
          <Route path="volunteer" element={<Volunteer />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<CheckOut />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
