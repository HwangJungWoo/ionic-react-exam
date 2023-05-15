import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewWillEnter } from "@ionic/react";
import { useState } from "react";
import { useParams } from "react-router";

interface RouteParams {
    email: string;
}

interface User {
    email: string;
    name: {
        first: string;
        last: string;
    }
    picture: {
        large: string;
    }
}

const Details: React.FC = () => {
    const { email } = useParams<RouteParams>();
    const [user, setUser] = useState<User>();

    const getUserByEmail = async () => {

        const url = `https://randomuser.me/api/?&page=1&results=200&seed=devdactic`;
        const data = await fetch(url);
        const json = await data.json();

        const user = json.results.find((item: any) => item.email === email);
        
        setUser(user);
    }

    useIonViewWillEnter(async () => {
        const user = await getUserByEmail();
    })



    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="'/"></IonBackButton>
                    </IonButtons>
                    <IonTitle>{user?.email}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>
                            {user?.name.first} {user?.name.last}
                        </IonCardTitle>
                        <IonCardContent>
                            <img src={user?.picture.large}></img>
                        </IonCardContent>
                    </IonCardHeader>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Details;