import { useContext } from "react";
import { mycontext } from "../index.js";

function child2() {
    const username = useContext(mycontext);
    return(
        <div>
            {username}
        </div>
    )
}