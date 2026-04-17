import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from '@ionic/react';

const Feed: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
              <IonTitle>Feed</IonTitle>
          </IonButtons>
          
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
          <h1>feed</h1>
      </IonContent>
    </IonPage>
  );
};

export default Feed;