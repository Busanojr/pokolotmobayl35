import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const search: React.FC = () => {
    return (
        <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons>
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonTitle>Search</IonTitle>
                    </IonToolbar>
                </IonHeader>
              <IonContent fullscreen>

              </IonContent>
        </IonPage>

    );
}

export default search;
