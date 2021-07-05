import React from 'react'
import GlobalStyle from './globalStyles'
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import {Navbar} from './components'
import Home from './pages/HomePage/Home'
import ScrollToTop from './components/ScrollToTop';
function App() {
  return (
    <Router>
     <GlobalStyle />
      <ScrollToTop />
     <Navbar />
     
     <Switch>
       <Route path='/' exact component={Home} />
     </Switch>
     
    </Router>
  );
}

export default App;