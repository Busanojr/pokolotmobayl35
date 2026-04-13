import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const about: React.FC = () => {
    return (
        <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons>
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonTitle>about</IonTitle>
                    </IonToolbar>
                </IonHeader>
              <IonContent fullscreen>

              </IonContent>
        </IonPage>

    );
}

export default about;
