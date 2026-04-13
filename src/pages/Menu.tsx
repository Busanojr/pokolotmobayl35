import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonMenu, IonMenuToggle, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar, } from "@ionic/react"
import { homeOutline, logOutOutline, search, settingsOutline, starOutline } from "ionicons/icons"
import { Redirect, Route } from "react-router-dom"
import Home from "./Home"
import favorite from "./tabs/favorite";
import about from "./tabs/about";

const Menu: React.FC = () => {
    const path = [
        { name: 'Home', url: '/app/home', icon: homeOutline },
        { name: 'favotire', url: '/app/page/tabs/favorite', icon: starOutline },
        { name: 'search', url: '/app/page/tabs/search', icon: search },
        { name: 'about', url: '/app/page/tabs/about', icon: settingsOutline }

    ];
    return (
        <IonPage>
            <IonMenu contentId="main" type="overlay">
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Menu</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent>

                    {path.map((item, index) => (
                        <IonMenuToggle key={index}>
                            <IonItem routerLink={item.url} routerDirection="forward">
                                <IonIcon icon={item.icon}
                                    slot="start"></IonIcon>
                                {item.name}
                            </IonItem>
                        </IonMenuToggle>
                    ))}

                    <IonButton routerLink="/" routerDirection="back" expand="full">
                        <IonIcon icon={logOutOutline} slot="start"></IonIcon>
                        Logout
                    </IonButton>
                </IonContent>
            </IonMenu>
            <IonRouterOutlet id="main">
                <Route exact path="/app/home" component={Home} />
                <Route exact path="/app">
                    <Redirect to="/app/home" />
                  <Route exact path="favorite" component={favorite} />
                </Route>
            </IonRouterOutlet>
        </IonPage>

    );
};

export default Menu;