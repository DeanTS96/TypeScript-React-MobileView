import {RootState} from "../state/store";
import {useDispatch, useSelector} from "react-redux";
import {setPhoneNumber} from "../state/phoneNumber/phoneNumber";
import React from 'react';
import {useNavigate} from 'react-router-dom';

function Page6() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userDetails = useSelector((state: RootState) => state.userDetails.value)
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = e.target as HTMLFormElement
        const formDataAsArray = [...formData] as HTMLInputElement[];
        dispatch(setPhoneNumber(formDataAsArray[0].value))
        navigate('/form/page7');
    }
    return (
        <div className="container">
            <p className="introText">We just need a couple more things from you {userDetails.firstName}...</p>
            <p className="questionText">Please enter your phone number in the box below</p>
            <p className="postCodeDetails">We'll use this to provide you with updates concerning your claim</p>
            <form onSubmit={handleSubmit}>
                <input className="singleDetail" type="text" placeholder="Your Phone Number"/>
                <button type="submit">Continue</button>
            </form>
        </div>
    )
}

export default Page6;