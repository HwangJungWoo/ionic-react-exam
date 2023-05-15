import { IonAvatar, IonContent, IonHeader, IonImg, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import { useState, useEffect, Key } from 'react';
import { useData } from './useData';

const Home: React.FC = () => {
  
  const data: any  = useData();


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {data.map((item: any, index: any) => (
            <IonItem key={index} routerLink={`details/${item.email}`}>
              <IonAvatar slot='start'>
                <IonImg src={item.picture.thumbnail} />
              </IonAvatar>
              <IonLabel>{item.email}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
