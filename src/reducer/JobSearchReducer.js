const initialState = {
    data: [],
    loading: false,
    error: false
}

const JobSearchReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "success":
            return {
                ...state,
                loading: false,
                data: payload,
                error:false
            }
        case "failure":
            return {
                ...state,
                error: true,
                loading: false,
                data: "Error. Try Again.."
            }
        case "loading":
            return {
                ...state,
                loading: true,
                error: false,
                data: []
            }
        default:
            return state;
    }
}

export default JobSearchReducer;