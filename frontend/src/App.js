import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
            <Route path='/' component={HomeScreen} exact />
            <Route path='/product/:id' component={ProductScreen} />
            {/* doubt    path='/product/:id' 
            
            server.js
            "proxy": "http://127.0.0.1:5000",

            "proxy": "http://192.168.42.172:5000",

             "proxy": "http://localhost:5000",

            */}
         </Container>
      </main>
      <Footer />
    </Router>
  );
} 

export default App;
