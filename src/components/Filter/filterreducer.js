const initialState={type:[],brand:[],gender:"all",search:""};

export const FilterReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case "TYPE":
            return{
                ...state,
                type:payload.check? [...state.type, payload.option] : (state.type.length > 0 ? state.type.filter(item => item !== payload.option) : [])
            }
        case "Gender":
            return{
                ...state,
                gender:payload
            }
        case "CLEAR":
            return{
                 ...state,
                brand: [],
                gender: "all",
                type: []
            }
        case "BRAND":
            return{
                ...state,
                brand:payload.check? [...state.brand, payload.option] : (state.brand.length > 0 ? state.brand.filter(item => item !== payload.option) : [])
            }
        case "SEARCH":
            return{
                ...state,
                search:payload
            }
        default:
            return state   
    }
}