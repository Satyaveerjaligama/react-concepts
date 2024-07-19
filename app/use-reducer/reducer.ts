export const reducer = (state: any, action: any) => {
    switch(action.type) {
        case "increment":
            return {...state, count: state.count +1}
        case "decrement":
            return {...state, count: state.count -1}
    }
}