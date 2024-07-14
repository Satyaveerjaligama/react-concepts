import { memo } from "react";

const ChildComponent = (props: any) => {
    console.log('child component');
    return (
        <p>Child count: {props.count}</p>
    )
};

export default memo(ChildComponent);