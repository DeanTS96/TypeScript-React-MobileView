import {useDispatch} from "react-redux";

//useSelector
//import {RootState} from "../state/store";

import {setBanksUsed} from "../state/banksUsed/banksUsed";
import React from 'react';
import {useNavigate} from 'react-router-dom';

function Page2() {
    //const banksUsedState = useSelector((state: RootState) => state.banksUsed.value)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const checkboxes = (e.target as HTMLFormElement).querySelectorAll('input[type="checkbox"]:checked');
        const listOfBanksUsed: string[] = ([...checkboxes] as HTMLInputElement[]).map((checkbox) => checkbox.dataset.value).filter(Boolean) as string[];
        dispatch(setBanksUsed(listOfBanksUsed))
        navigate('/form/page3')
    }
//<button onClick={() => dispatch(goodbye("Bye"))}>Bye Button</button>
    return (
        <>
            <p className="introText">Thanks for that, now...</p>
            <p className="questionText">Please can you tell us which bank(s) or lenders you have used</p>
            <form className="page2Form" onSubmit={handleSubmit}>
                <div className="page2Checkbox">
                    <input className="checkBox-box" type="checkbox" data-value="HSBCBank"/>
                    <label>
                        HSBC Bank
                    </label>
                </div>
                <div className="page2Checkbox">
                    <input className="checkBox-box" type="checkbox" data-value="M&SBank"/>
                    <label>
                        M&S Bank
                    </label>
                </div>
                <div className="page2Checkbox">
                    <input className="checkBox-box" type="checkbox" data-value="Barclays"/>
                    <label>
                        Barclays
                    </label>
                </div>
                <div className="page2Checkbox">
                    <input className="checkBox-box" type="checkbox" data-value="BarclayCard"/>
                    <label>
                        Barclay Card
                    </label>
                </div>
                <div className="page2Checkbox">
                    <input className="checkBox-box" type="checkbox" data-value="Egg"/>
                    <label>
                        Egg (BarclayCard)
                    </label>
                </div>
                <div className="page2Checkbox">
                    <input className="checkBox-box" type="checkbox" data-value="Goldfish"/>
                    <label>
                        Goldfish
                    </label>
                </div>
                <div className="page2Checkbox">
                    <input className="checkBox-box" type="checkbox" data-value="Lloyds"/>
                    <label>
                        Lloyds
                    </label>
                </div>
                <div className="page2Checkbox">
                    <input className="checkBox-box" type="checkbox" data-value="HalifaxBankofScotland"/>
                    <label>
                        Halifax Bank of Scotland
                    </label>
                </div>
                <div className="page2Checkbox">
                    <input className="checkBox-box" type="checkbox" data-value="BlackHorse"/>
                    <label>
                        Black Horse
                    </label>
                </div>
                <div className="page2Checkbox">
                    <input className="checkBox-box" type="checkbox" data-value="MBNA"/>
                    <label> 
                        MBNA
                    </label>
                </div>
                <div className="page2Checkbox">
                    <input className="checkBox-box" type="checkbox" data-value="LiverpoolVictoria"/>
                    <label>
                        Liverpool Vicotria
                    </label>
                </div>
                <div className="page2Checkbox">
                    <input className="checkBox-box" type="checkbox" data-value="CapitalOne"/>
                    <label>
                        Capital One
                    </label>
                </div>
                <div className="page2Checkbox">
                    <input className="checkBox-box" type="checkbox" data-value="SantanderCreditCard&Loans"/>
                    <label className="checkBoxLabel">
                        Santander(Credit card & Loans)
                    </label>
                </div>
                <div className="page2Checkbox">
                    <input className="checkBox-box" type="checkbox" data-value="JDWilliams"/>
                    <label>
                        JD Williams & Company Limmited
                    </label>
                </div>
                <div className="page2Checkbox">
                    <input className="checkBox-box" type="checkbox" data-value="Alliance"/>
                    <label> 
                        Alliance & Leicester (Loans)
                    </label>
                </div>
                <div className="page2Checkbox">
                    <input className="checkBox-box" type="checkbox" data-value="FirstPlus"/>
                    <label> 
                        FirstPlus Financial
                    </label>
                </div>
                <div className="page2Checkbox">
                    <input className="checkBox-box" type="checkbox" data-value="JohnLewis"/>
                    <label> 
                        John Lewis
                    </label>
                </div>
                <div className="page2Checkbox">
                    <input className="checkBox-box" type="checkbox" data-value="FirstDirect"/>
                    <label>
                        First Direct
                    </label>
                </div>
                <div className="page2Checkbox">
                    <input className="checkBox-box" type="checkbox" data-value="LittleWoods"/>
                    <label>  
                        Little Woods
                    </label>
                </div>
                <div className="page2Checkbox">
                    <input className="checkBox-box" type="checkbox" data-value="SainsburysBank"/>
                    <label>
                        Sainsburys Bank
                    </label>
                </div>
                <div className="page2Checkbox">
                    <input className="checkBox-box" type="checkbox" data-value="SantanderStoreCards"/>
                    <label>
                        Santander (Store Cards)
                    </label>
                </div>
                <div className="page2Checkbox">
                    <input className="checkBox-box" type="checkbox" data-value="ShopDirectFinanceCompanyLimited"/>
                    <label>      
                        Shop Direct Finance company Limited
                    </label>
                </div>
                <div className="page2Checkbox">
                    <input className="checkBox-box" type="checkbox" data-value="FreemansPLC"/>
                    <label>
                        Freemans PLC
                    </label>
                </div>
                <div className="page2Checkbox">
                    <input className="checkBox-box" type="checkbox" data-value="GrattanPLC"/>
                    <label>
                        Grattan PLC
                    </label>
                </div>
                <div className="page2Checkbox">
                    <input className="checkBox-box" type="checkbox" data-value="Argos"/>
                    <label>
                        Argos
                    </label>
                </div>
                <div className="page2Checkbox">
                    <input className="checkBox-box" type="checkbox" data-value="TheCo-OperativeBank"/>
                    <label>
                        The Co-Operative Bank
                    </label>
                </div>
                <button type="submit" className="continueButton">Continue</button>
            </form>
        </>
    )
}

export default Page2