
import './App.css';
import { Component } from 'react';
import Layout from '../components/Layout/Layout';
import Home from '../components/Home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from '../components/NotFound/NotFound';

class App extends Component{
  render() {
    return (
      <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
      </BrowserRouter>
    );
  }
}
export default App;
