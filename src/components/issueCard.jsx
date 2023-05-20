import './issueCard.scss'
function IssueCard() {
    return (<div className="issue-card-con">
        <div className="issue-card">
            <h1>Muscle Strain</h1>
            <p>There was an issue in your dead lifts. You are putting too much strain on your muscles.</p>
        </div>
        <div className="issue-card">
            <h1>Back Pain</h1>
            <p>Your are lifting weight more than your bones capacity. In long run you will have back pains.</p>
        </div>
    </div>);
}

export default IssueCard;