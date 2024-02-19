import {RootState} from "../state/store";
import {useDispatch, useSelector} from "react-redux";
import React from 'react';
import {useNavigate} from 'react-router-dom';
import SignatureCanvas from 'react-signature-canvas';
import SignaturePad from "react-signature-canvas";
import {setESignature} from "../state/eSignature/eSignature";

function Page7() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userDetails = useSelector((state: RootState) => state.userDetails.value)
    let padRef = React.useRef<SignatureCanvas>(null);
    function handleSubmit() {
        const url = padRef.current?.getTrimmedCanvas().toDataURL("image/png");
        if (url) dispatch(setESignature(url));
        navigate('/form/page8');
    }
    return (
        <div className="container">
            <p className="introText">You're almost finished, {userDetails.firstName}. You just need to review this...</p>
            <p className="questionText">Please sign here to submit your Plevin claim.</p>
            <div>
                <SignaturePad ref={padRef} canvasProps={{ className: "sigCanvas" }} />
            </div>
            <p className="reviewText">Review your <span className="claimPackText">claim pack here</span>.</p>
            <p className="disclaimer"><span>Disclaimer: </span>By proceeding, you agree to be the terms listed in privacy Policy. Additionally, you agree to b contacted by Veriform Limited, OPOP Services Limited, or any of our affiliated partners in regards to your claim and future oppertunities</p>
            <button onClick={handleSubmit}>Submit Claim</button>
        </div>
    )
}

export default Page7;