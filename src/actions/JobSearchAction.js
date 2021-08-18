import axios from 'axios'

export const getApiResults = () => async dispatch => {
    
    dispatch({
        type: "loading"
    })
    try {
        const result = await axios.get('http://localhost:5000/api/courses')

        dispatch({
            type: "success",
            payload: result.data
        })
    } catch {
        dispatch({
            type: "failure",
            payload: []
        })
    }
}

