import axios, { AxiosResponse, AxiosError } from 'axios';
import {useDispatch, useSelector} from "react-redux";
import {setFoundAddress} from "../state/foundAddress/foundAddress";
import {setAddress} from "../state/address/address";
import React from 'react';
import {RootState} from "../state/store";
import {useNavigate} from 'react-router-dom';

function Page3(){

const foundAddressState = useSelector((state: RootState) => state.foundAddress.value)

const dispatch = useDispatch();
const navigate = useNavigate();

    interface PostCodeType {
        postcode: string;
    }
    
    async function getAddress(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log('hehe')
        try {
            const response: AxiosResponse<PostCodeType> = await axios.get<PostCodeType>('https://news-api-9k2x.onrender.com/api/articles');
            dispatch(setFoundAddress(true));
            console.log('success')
    
        } catch (error) {
            dispatch(setFoundAddress(false));
            console.log('Error', (error as AxiosError).message);
        }
    }

    function confirmAddress(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = e.target as HTMLFormElement
        const formDataAsArray = [...formData] as HTMLInputElement[];
        const addressToPass = {
            line1: formDataAsArray[0].value,
            line2: formDataAsArray[1].value,
            town: formDataAsArray[2].value,
            county: formDataAsArray[3].value,
            country: formDataAsArray[4].value,
            postcode: formDataAsArray[5].value
        }
        
        dispatch(setAddress(addressToPass))
        navigate('/form/page4');
    }

    return (
        <>
            <p className="introText">That's great! Now please could you enter this in...</p>
            <p className="questionText">Please enter your postcode in the box below</p>
            <p className="postCodeDetails">We need this information for anti-fraud pruposes</p>
            {
                !foundAddressState ? 
                <form onSubmit={getAddress}>
                    <input placeholder="Postcode">
                    </input>
                    <button type="submit">Search</button>
                </form> 
                :
                <>
                    <form onSubmit={confirmAddress}>
                        <input className="confirmInput" type="text" value="17 Hamburg Road" readOnly />
                        <input className="confirmInput" type="text" value="Luton" readOnly />
                        <input className="confirmInput" type="text" value="Reading" readOnly />
                        <input className="confirmInput" type="text" value="Cheshire" readOnly />
                        <input className="confirmInput" type="text" value="England" readOnly />
                        <input className="confirmInput" type="text" value="ZX5 7GH" readOnly />
                        <button className="submitAddressButton" type="submit">Continue</button>
                    </form>
                    <h2>Previous address</h2>
                    <p>Please enter any previous addresses you might have lived at when you origionally took out the credit (if different from the address above)</p>
                    <button className="addAddress">Add Address</button>
                </>
            }
        </>
    )
}

export default Page3;