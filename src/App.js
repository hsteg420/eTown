import './components/Style.css';
import Trending from './Pages/Nav1/Trending';
import Header from './components/Header';
import SimpleBottomNavigation from './components/SimpleBottomNavigation';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Movie from './Pages/Nav2/Movie';
import Tv from './Pages/Nav3/Tv';
import Search from './Pages/Nav4/Search';


function App() {
  return (
    <BrowserRouter>
   <Header/>
   <div className="app">
   <Container>
          <Switch>
            <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movie}/>
            <Route path="/series" component={Tv} />
            <Route path="/search" component={Search} /> 
          </Switch>
        </Container>
   </div>
   <SimpleBottomNavigation/>
   </BrowserRouter>
  );
}

export default App;
