type incrementACType={
    type: 'INCREMENT'

}
type resetCountertACType={
    type: 'RESET'

}
type RootTypeAC = incrementACType | resetCountertACType
export const reducerToCount=(state:any,action:RootTypeAC)=>{
    switch (action.type){
        case 'INCREMENT': {
            return state+1
        }
        case 'RESET': {
            return state=0
        }
            default: return state
    }
}
export const incrementAC=():incrementACType=>{
    return {
        type: 'INCREMENT'
    }
}
export const resetCountertAC=():resetCountertACType=>{
    return {
        type: 'RESET'
    }
}