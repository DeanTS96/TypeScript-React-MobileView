import {RootState} from "../state/store";
import {useDispatch, useSelector} from "react-redux";
import {setEmailAddress} from "../state/emailAddress/emailAddress";
import React from 'react';
import {useNavigate} from 'react-router-dom';

function Page5() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userDetails = useSelector((state: RootState) => state.userDetails.value)
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = e.target as HTMLFormElement
        const formDataAsArray = [...formData] as HTMLInputElement[];
        dispatch(setEmailAddress(formDataAsArray[0].value))
        navigate('/form/page6');
    }
    return (
        <>
            <p className="introText">Thanks for that {userDetails.firstName}! You're almost done...</p>
            <p className="questionText">Please enter your email address in the box below</p>
            <p className="postCodeDetails">We'll use this to provide you with updates concerning your claim</p>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Your Email Address"/>
                <button type="submit">Continue</button>
            </form>
        </>
    )
}

export default Page5;