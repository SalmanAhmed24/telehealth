import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Dashboard.scss';
import { IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/react';
import BarChart from '../components/barChart.jsx';
import ProgressBar from '../components/progressBar.jsx';
import IssueCard from '../components/issueCard.jsx';



const Tab2: React.FC = () => {
  const handleExcercise = e => console.log(e.target.value)
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div>
          <div className='filter-inp-wrap'>
          <div className='dropdown-wrap'>
          <IonList className='cus-list'>
      <IonItem>
        <IonSelect className="select-cus" onIonChange={handleExcercise} aria-label="Exercise" placeholder="Select Exercise">
          <IonSelectOption value="dead lifts">Dead Lifts</IonSelectOption>
        </IonSelect>
      </IonItem>
    </IonList>
          </div>
          </div>
          <div className='bar-main-con'>
            <BarChart />
            <ProgressBar />
          </div>
          <div className='issue-main-wrap'>
            <h1 className='gen-h'>General Issues</h1>
            <IssueCard />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
