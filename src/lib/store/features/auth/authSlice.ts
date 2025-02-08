import {createSlice} from "@reduxjs/toolkit"


export const authSlice = createSlice({
	name : "auth",
	initialState : null,
	reducers : {
		setUser : (state , action)=>{
			return action.payload
		},
		clearUser : ()=>{
			return null
		}
	}
})


export const {setUser , clearUser} = authSlice.actions
export default authSlice.reducer