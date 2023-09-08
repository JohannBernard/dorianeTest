const reduxAction = (type: string, payload: any) => {
    return {
        type: type,
        payload
    }
}
export default reduxAction;  