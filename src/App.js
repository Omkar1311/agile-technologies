import './App.css';
import Loginpage from './components/loginPage/Loginpage';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ProfileUserPage from './components/profilePage/profileUserPage/profileUserPage';
import ProfileCompanyPage from './components/profilePage/profileCompanyPage/ProfileCompanyPage';
import CustomerListPage from './components/customerListPage/CustomerListPage';
import AgencyOrBrokerPage from './components/agencyOrBrokerPage/AgencyOrBrokerPage';
import BrokerBussinessPage from './components/brokerBussinessPage/BrokerBussinessPage';
import MainNavigationPage from './components/mainNavigationPage/MainNavigationPage';

function App() {
  return (
    <div className="App">

      <Router>
        <Route exact path='/' component={Loginpage} />
        <Route path='/mainNavigationPage' component={MainNavigationPage} />
        <Route path='/mainNavigationPage/profilePageUser' component={ProfileUserPage} />
        <Route path='/mainNavigationPage/profilePageCompany' component={ProfileCompanyPage} />
        <Route path='/mainNavigationPage/customerListPage' component={CustomerListPage} />
        <Route path='/mainNavigationPage/agencyOrBrokerPage' component={AgencyOrBrokerPage} />
        <Route path='/mainNavigationPage/brokerBussinessPage' component={BrokerBussinessPage} />


      </Router>

    </div>
  );
}

export default App;
