//import {Dispatch, SetStateAction} from "react";
//import {Page1Value} from '../interfaces'
import {useNavigate} from 'react-router-dom';

//useSelector
import {useDispatch} from "react-redux";

//import {RootState} from "../state/store";
import {setHadCreditCardLoan} from "../state/hadCreditCardLoan/hadCreditCardLoan";
//{hadCreditCardLoan, setHadCreditCardLoan}: Page1Value & {setHadCreditCardLoan: Dispatch<SetStateAction<boolean>>}

function Page1() {
    //const hadCreditCardLoanState = useSelector((state: RootState) => state.hadCreditCardLoan.value)
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

/*const Page1: React.FC<Page1Value> = ({ hadCreditCardLoan }) => {
    console.log(hadCreditCardLoan);
    return (
      <h1>Hey</h1>
    );
  }*/
export default Page1