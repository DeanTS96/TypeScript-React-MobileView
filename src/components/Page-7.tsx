import {RootState} from "../state/store";
import {useDispatch, useSelector} from "react-redux";
import React from 'react';
import {useNavigate} from 'react-router-dom';

function Page7() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userDetails = useSelector((state: RootState) => state.userDetails.value)
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        //const formData = e.target as HTMLFormElement
        //const formDataAsArray = [...formData] as HTMLInputElement[];
        //navigate('/form/page7');
    }
    return (
        <div className="container">
            <p className="introText">You're almost finished, {userDetails.firstName}. You just need to review this...</p>
            <p className="questionText">Please sign here to submit your Plevin claim.</p>
            <p className="disclaimer"><span>Disclaimer: </span>By proceeding, you agree to be the terms listed in privacy Policy. Additionally, you agree to b contacted by Veriform Limited, OPOP Services Limited, or any of our affiliated partners in regards to your claim and future oppertunities</p>
            <form onSubmit={handleSubmit}>
                <button type="submit">Continue</button>
            </form>
        </div>
    )
}

export default Page7;