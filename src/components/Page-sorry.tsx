import {useNavigate} from 'react-router-dom';

function PageSorry() {
    const navigate = useNavigate();
    function handleSubmit(){
        navigate('/form/page1')
    }
    return (
        <div className="container">  
            <p className="endText">We're sorry about that</p>
            <p className="endSubText">Based on your given answers, it looks like you won't qualify to claim for compensation.</p>
            <p className="endSubText">If you believe this was a mistake, please try again below.</p>
            <button className="cotinueButton" type="submit" onClick={handleSubmit}>Continue</button>
        </div>
    )
}

export default PageSorry;