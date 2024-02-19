import {RootState} from "../state/store";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';
import {setHaveDeclaredBankrupt} from "../state/haveDeclaredBankrupt/haveDeclaredBankrupt";

function Page8() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userDetails = useSelector((state: RootState) => state.userDetails.value)
    function handleSubmit(bool: boolean) {
        dispatch(setHaveDeclaredBankrupt(bool))
        navigate('/form/page-complete');
    }
    return (
        <>
            <p className="introText">We just need a couple more thigns from you, {userDetails.firstName}...</p>
            <p className="questionText">Heve you ever been in or are proposed to be in an IVA or declared bankrupt?*</p>
            <button className="answerButton" type="submit" onClick={() => handleSubmit(true)}>Yes</button>
            <button className="answerButton" type="submit" onClick={() => handleSubmit(false)}>No</button>
        </>
    )
}

export default Page8;