import {RootState} from "../state/store";
import {useSelector} from "react-redux";


function PageComplete() {
    const userDetails = useSelector((state: RootState) => state.userDetails.value)
    return (
        <div className="container">  
            <p className="endText">Thank you {userDetails.firstName}! Your extra answers ave been submitted.</p>
            <p className="endSubText">These will allow our expert team to begin working on your case right away and we look to get back to you as soon as possible.</p>
            <p className="questionText">Don't forget to keep an eye out for a call or email from a member of our team concerning your claim.</p>
        </div>
    )
}

export default PageComplete;