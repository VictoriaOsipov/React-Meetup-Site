import { Route, Switch, Li } from 'react-router-dom'

import AllMeetupsPage from './pages/AllMeetups'
import NewMeetupPage from './pages/NewMeetup'
import FavoritesPage from './pages/Favorites'
import MainNavigation from './components/layout/MainNavigation'

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>    
        makes only one of the routes active. without it Route uses "if includes" and will show all on them 
        <Route path='/' exact={true}> 
        {/* exact tells router that for this route it should not check if begins with '/' but if it matches the full path */}
          <AllMeetupsPage />
        </Route>
        <Route path='/new-meetup'>
          <NewMeetupPage />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
