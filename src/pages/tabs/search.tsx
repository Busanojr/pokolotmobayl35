import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from '@ionic/react';


const Search: React.FC = () => {
  return (

    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Hi dora</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Search;