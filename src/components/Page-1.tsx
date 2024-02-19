
import {useNavigate} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {setHadCreditCardLoan} from "../state/hadCreditCardLoan/hadCreditCardLoan";

function Page1() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function handleSubmit(bool: boolean): void {
        dispatch(setHadCreditCardLoan(bool))
        navigate('/form/page2')
    }
    return (
        <div className="container">
            <p className="introText">Let's get started with your free Plevin check!</p>
            <p className="questionText">Have you had a credit card, loan or mortgage in the past?</p>
            <button className="answerButton" type="submit" onClick={() => handleSubmit(true)}>Yes</button>
            <button className="answerButton" type="submit" onClick={() => handleSubmit(false)}>No</button>
        </div>
    )
}

export default Page1