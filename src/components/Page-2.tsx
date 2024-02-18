import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../state/store";
import {goodbye} from "../state/testString/testString";

function Page2() {
    const greeting = useSelector((state: RootState) => state.testString.value)
    const dispatch = useDispatch();

    return (
        <>
            <h1>Page2</h1>
            <p className="introText">Thanks for that, now...</p>
            <p className="questionText">Please can you tell us which bank(s) or lenders you have used</p>
            <h2>{greeting}</h2>
            <button onClick={() => dispatch(goodbye("Bye"))}>Bye Button</button>
        </>
    )
}

export default Page2