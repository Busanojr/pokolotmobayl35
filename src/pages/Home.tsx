import {IonTabs, IonTabButton, IonIcon, IonLabel} from '@ionic/react';

import { IonReactRouter } from '@ionic/react-router';
import './Home.css';
import { IonRouterOutlet, IonTabBar, IonTitle, IonToolbar } from '@ionic/react';

import { bookmarkOutline, search, starOutline } from 'ionicons/icons';
import { Route } from 'react-router';

import Favorite from './tabs/favorite';
import Feed from './tabs/Feed';
import Search from './tabs/search';

const Home: React.FC = () => {
  const tabs = [
    {name:'feed',tab:'feed',url:'app/home/feed',icon:bookmarkOutline},
    {name:'search',tab:'search',url:'app/home/search',icon:search},    
    {name:'favorites',tab:'favorites',url:'app/home/favorites',icon:starOutline},
  ]

  return (
    <IonReactRouter>
        <IonTabs>
          <IonTabBar slot="bottom">
            <IonToolbar>
              <IonTitle>
                Home page
              </IonTitle>
            </IonToolbar>
              {/**/}

              {tabs.map((item, index) =>
                <IonTabButton key={index} tab={item.tab} href={item.url}>
                  <IonIcon icon={item.icon}/>
                  <IonLabel>{item.name}</IonLabel>
                </IonTabButton>
              )};
          </IonTabBar>
          <IonRouterOutlet>
            <Route exact path="/app/home/feed" component={Feed}/>
            <Route exact path="/app">
            <Route exact path="/app/home/feed" />
            </Route>

            <Route exact path="/app/home/search" component={Search}/>
            <Route exact path="/app/home/Favorites" component={Favorite}/>
           
          </IonRouterOutlet>
        </IonTabs>
    </IonReactRouter>
  );
};

export default Home;