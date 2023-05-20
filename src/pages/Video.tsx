import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Video.scss';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Video</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className='video-sec'>
          <div className='video-con'>
            <div className='video-box'>

            </div>
            <div className='geo-box-con'>
            <div className='geo-box'>
              
              </div>
              <p className='value-para'>This is live feedback we are getting from google AI software</p>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
