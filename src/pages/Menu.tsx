import {
  IonPage, IonSplitPane, IonMenu, IonRouterOutlet,
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonMenuToggle, IonIcon, IonItem, IonButton
} from '@ionic/react';

import { Redirect, Route } from 'react-router';
import Home from "./Home";
import Page1 from "./Page1";
import Page2 from "./Page2";

import {
  homeOutline,
  informationOutline,
  logOutOutline,
  settingsOutline
} from 'ionicons/icons';

const Menu: React.FC = () => {

  const path = [
    { name: "Home", url: "/app/Home", icon: homeOutline },
    { name: "Page1", url: "/app/Page1", icon: settingsOutline },
    { name: "Page2", url: "/app/Page2", icon: informationOutline }
  ];

  return (
    <IonPage>
      <IonSplitPane contentId="main">

        {/* MENU */}
        <IonMenu contentId="main">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>

          <IonContent>
            {path.map((item, index) => (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem routerLink={item.url} routerDirection="forward">
                  <IonIcon icon={item.icon} slot="start" />
                  {item.name}
                </IonItem>
              </IonMenuToggle>
            ))}

            <IonButton routerLink="/" expand="full">
              <IonIcon icon={logOutOutline} slot="start" />
              Logout
            </IonButton>
          </IonContent>
        </IonMenu>

        {/* ROUTES */}
        <IonRouterOutlet id="main">
          <Route exact path="/app/Home" component={Home} />
          <Route exact path="/app/Page1" component={Page1} />
          <Route exact path="/app/Page2" component={Page2} />

          <Route exact path="/app">
            <Redirect to="/app/Home" />
          </Route>
        </IonRouterOutlet>

      </IonSplitPane>
    </IonPage>
  );
};

export default Menu;