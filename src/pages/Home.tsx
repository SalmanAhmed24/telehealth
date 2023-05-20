import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.scss';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className='inner-cus-con'>
          <h1 className='main-home-h'>Telehealth</h1>
          <p className='sub-home-h'>Your Personal Health Assistant</p>
        <div className='row1'>
          <div className="col">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat expedita ipsa quos est minus velit, laboriosam magnam corporis natus, aliquam quas debitis sapiente omnis illum accusamus nisi inventore dolore obcaecati.</div>
          <div className="col"></div>
        </div>
        <div className='row2'>
          <div className="col"></div>
          <div className="col">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat perferendis culpa, repellendus nam tenetur incidunt! Hic sed mollitia placeat expedita distinctio? Accusamus quia molestias itaque expedita minima velit provident fugiat!</div>
        </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
