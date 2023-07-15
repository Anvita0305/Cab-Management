import { Toaster } from "react-hot-toast";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./Components/Home";
import SigIn from "./Components/SigIn/SignIn";
import PrivateRoute from "./Components/PrivateRoute";
import Profile from "./Components/Profile/Profile";
import Drivers from "./Components/Drivers/Drivers";
import Cabs from "./Components/Cabs/Cabs";
import Driver from "./Components/Driver/Driver";
import Contact from "./Components/Contact/Contact";
import Cab from "./Components/Cab/Cab";
import ADriver from "./Components/ADriver/ADriver";
import ACab from "./Components/ACab/ACab";


function App() {
  return (
    <div className="App">
      <div>
          <Toaster
            position="top-center"
          />
      </div>
      <BrowserRouter>
      <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SigIn/>} />
                <Route path='/profile' element={<PrivateRoute route='/signin' />}>
                 <Route path='/profile' element={<Profile />} />
                </Route>
                <Route path='/drivers' element={<PrivateRoute route='/signin' />}>
                 <Route path='/drivers' element={<Drivers />} />
                </Route>
                <Route path='/cabs' element={<PrivateRoute route='/signin' />}>
                 <Route path='/cabs' element={<Cabs />} />
                </Route>
                <Route path='/driver/:id' element={<PrivateRoute route='/signin' />}>
                  <Route path="/driver/:id" element={<Driver/>} />
                </Route>
                <Route path='/cab/:id' element={<PrivateRoute route='/signin' />}>
                  <Route path="/cab/:id" element={<Cab/>} />
                </Route>
                <Route path='/addriver' element={<PrivateRoute route='/signin' />}>
                  <Route path="/addriver" element={<ADriver/>} />
                </Route>
                <Route path='/adcab' element={<PrivateRoute route='/signin' />}>
                  <Route path="/adcab" element={<ACab/>} />
                </Route>
                <Route path="/contact" element={<Contact />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
