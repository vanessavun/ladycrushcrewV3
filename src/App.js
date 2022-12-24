import { useEffect } from "react";
import { Routes, Route } from 'react-router-dom';

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import CheckOut from './routes/checkout/checkout.component';
import About from "./routes/about/about.component";
import Events from "./routes/events/events.component";
import Volunteer from "./routes/volunteer/volunteer.component";
import Contact from "./routes/contact/contact.component";
import { checkUserSession } from "./store/user/user.action";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);
  
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='events' element={<Events />} />
        <Route path='volunteer' element={<Volunteer />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<CheckOut />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    </Routes>
  )
};

export default App;
