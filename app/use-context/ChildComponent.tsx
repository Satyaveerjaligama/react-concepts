import { memo } from "react";
import GrandChildComponent from "./GrandChildComponent";

const ChildComponent = () => {
    console.log('Child component')
    return (
        <>
        <p>Child Component</p>
        <GrandChildComponent />
        </>
    )
}

export default memo(ChildComponent);