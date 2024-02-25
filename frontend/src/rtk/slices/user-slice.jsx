import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
// export const fetchProducts = createAsyncThunk("fetchProducts/fetchData", 
//         async() => {
//             const res = await fetch()
//         }
// )

const userSlice = createSlice({
    initialState: [],
    name: "userSlice",
    reducers: {
        addUserInfo: (state, action) => {
            state.push(action.payload)
        },
        clearUserInfo: (state, action) => {
            return []
        }
    },
    extraReducers: (builder) => {}
})

export const {addUserInfo, clearUserInfo} = userSlice.actions
export default userSlice.reducer
