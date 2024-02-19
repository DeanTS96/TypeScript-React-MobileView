import {RootState} from "../state/store";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';
import {setHaveDeclaredBankrupt} from "../state/haveDeclaredBankrupt/haveDeclaredBankrupt";
import axios from 'axios';

function Page8() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state: RootState) => state.userDetails.value)
    const {
        banksUsed,
        hadCreditCardLoan,
        foundAddress,
        address,
        userDetails,
        emailAddress,
        phoneNumber,
        eSignature
    } = useSelector((state: RootState) => state);

    async function handleSubmit(bool: boolean) {
        const postData = {
            banksUsed,
            hadCreditCardLoan,
            foundAddress,
            address,
            userDetails,
            emailAddress,
            phoneNumber,
            haveDeclaredBankrupt: bool,
            eSignature
        };
        dispatch(setHaveDeclaredBankrupt(bool))
            try {
                await axios.post('', postData);
            } catch (err) {
                console.error(err);
            }
        navigate('/form/page-complete');
    }
    return (
        <div className="container">
            <p className="introText">We just need a couple more thigns from you, {user.firstName}...</p>
            <p className="questionText">Heve you ever been in or are proposed to be in an IVA or declared bankrupt?*</p>
            <button className="answerButton" type="submit" onClick={() => handleSubmit(true)}>Yes</button>
            <button className="answerButton" type="submit" onClick={() => handleSubmit(false)}>No</button>
        </div>
    )
}

export default Page8;