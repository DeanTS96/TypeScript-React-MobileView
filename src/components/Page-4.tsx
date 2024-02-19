import {useDispatch} from "react-redux";
import {setUserDetails} from "../state/userDetails/userDetails";
import React from 'react';
import {useNavigate} from 'react-router-dom';

function Page4() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = e.target as HTMLFormElement
        const formDataAsArray = [...formData] as HTMLInputElement[];
        const dateOfBirth = formDataAsArray[4].value + '/' + formDataAsArray[5].value + '/' + formDataAsArray[6].value
        const userDetails = {
            title: formDataAsArray[0].value,
            firstName: formDataAsArray[1].value,
            lastName: formDataAsArray[2].value,
            previousName: formDataAsArray[3].value,
            dateOfBirth: dateOfBirth
        }
        dispatch(setUserDetails(userDetails));
        navigate('/form/page5');
    }
    return (
        <>
            <form className="detailsForm" onSubmit={handleSubmit}>
                <div className="titleContainer">
                    <select className="titleDD formItem">
                        <option value="Mr">
                            Mr
                        </option>
                        <option value="Miss">
                            Miss
                        </option>
                        <option value="Mrs">
                            Mrs
                        </option>
                    </select>
                </div>
                <input className="detailsFormItem formItem" type="text" placeholder="First name"/>
                <input className="detailsFormItem formItem" type="text" placeholder="Last name"/>
                <label>
                    Maiden / Previous Name(s)
                </label>
                <input className="detailsFormItem formItem" type="text" placeholder="Enter here"/>
                <label>
                    Date of Birth
                </label>
                <div className="dateOfBirthContainer">
                    <select className="dateOfBirthDD formItem" defaultValue="">
                        <option value="" disabled hidden>
                            DD
                        </option>
                        <option value="01">
                            01
                        </option>
                        <option value="02">
                            02
                        </option>
                        <option value="03">
                            03
                        </option>
                        <option value="04">
                            04
                        </option>
                        <option value="05">
                            05
                        </option>
                        <option value="06">
                            06
                        </option>
                        <option value="07">
                            07
                        </option>
                        <option value="08">
                            08
                        </option>
                        <option value="09">
                            09
                        </option>
                        <option value="10">
                            10
                        </option>
                        <option value="11">
                            11
                        </option>
                        <option value="12">
                            12
                        </option>
                        <option value="13">
                            13
                        </option>
                        <option value="14">
                            14
                        </option>
                        <option value="15">
                            15
                        </option>
                        <option value="16">
                            16
                        </option>
                        <option value="17">
                            17
                        </option>
                        <option value="18">
                            18
                        </option>
                        <option value="19">
                            19
                        </option>
                        <option value="20">
                            20
                        </option>
                        <option value="21">
                            21
                        </option>
                        <option value="22">
                            22
                        </option>
                        <option value="23">
                            23
                        </option>
                        <option value="24">
                            24
                        </option>
                        <option value="25">
                            25
                        </option>
                        <option value="26">
                            26
                        </option>
                        <option value="27">
                            27
                        </option>
                        <option value="28">
                            28
                        </option>
                        <option value="29">
                            29
                        </option>
                        <option value="30">
                            30
                        </option>
                        <option value="31">
                            31
                        </option>
                    </select>
                    <select className="dateOfBirthDD formItem" defaultValue="">
                        <option value="" disabled hidden>
                            MM
                        </option>
                        <option value="01">
                            01
                        </option>
                        <option value="02">
                            02
                        </option>
                        <option value="03">
                            03
                        </option>
                        <option value="04">
                            04
                        </option>
                        <option value="05">
                            05
                        </option>
                        <option value="06">
                            06
                        </option>
                        <option value="07">
                            07
                        </option>
                        <option value="08">
                            08
                        </option>
                        <option value="09">
                            09
                        </option>
                        <option value="10">
                            10
                        </option>
                        <option value="11">
                            11
                        </option>
                        <option value="12">
                            12
                        </option>
                    </select>
                    <select className="dateOfBirthDD formItem" defaultValue="">
                        <option value="" disabled hidden>
                            YYYY
                        </option>
                        <option value="2000">
                            2000
                        </option>
                        <option value="2001">
                            2001
                        </option>
                        <option value="2002">
                            2002
                        </option>
                        <option value="2003">
                            2003
                        </option>
                        <option value="2004">
                            2004
                        </option>
                        <option value="2005">
                            2005
                        </option>
                        <option value="2006">
                            2006
                        </option>
                        <option value="2007">
                            2007
                        </option>
                        <option value="2008">
                            2008
                        </option>
                        <option value="2009">
                            2009
                        </option>
                        <option value="2010">
                            2010
                        </option>
                        <option value="2012">
                            2012
                        </option>
                        <option value="2013">
                            2013
                        </option>
                        <option value="2014">
                            2014
                        </option>
                        <option value="2015">
                            2015
                        </option>
                        <option value="2016">
                            2016
                        </option>
                        <option value="2017">
                            2017
                        </option>
                        <option value="2018">
                            2018
                        </option>
                        <option value="2019">
                            2019
                        </option>
                        <option value="2020">
                            2020
                        </option>
                    </select>
                </div>
                <button className="continueButton" type="submit">Continue</button>
            </form>
        </>
    )
}

export default Page4;