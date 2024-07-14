import { memo } from "react";

const ChildComponent = (props: any) => {

    console.log('Child component')

    return (
        <>
        <button onClick={props.increment}>Increment from child</button>
        </>
    )
};

export default memo(ChildComponent);