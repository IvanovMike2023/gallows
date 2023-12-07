import React, {FC} from "react";
interface ResetCounterType{
    SetResetCounter:()=>void
}
const ResetCounter:FC<ResetCounterType>=(props)=>{
    const SetResetCounterHandler=()=>{
        props.SetResetCounter()
    }
    return (
        <button onClick={SetResetCounterHandler}>Reset</button>
    )
}
export default ResetCounter