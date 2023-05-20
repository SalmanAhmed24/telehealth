import { Circle } from 'rc-progress';
import './bar.scss'
function ProgressBar() {
    const exercisePer = 60;
    return (<div className='progress-con'>
        <h1>Goals Achieved</h1>
        <div className='prog-wrap'>
            <Circle percent={exercisePer} strokeWidth={2} strokeColor="#e0e300" /> 
            <p className='per-p'>{exercisePer}%</p>
        </div>
    </div>);
}

export default ProgressBar;