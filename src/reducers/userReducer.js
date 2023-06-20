export const userRegisterRouter = (state = {}, action) => {
    switch (action.type) {
      case "REGISTER_REQUEST":
        return {
          loading: true,
        };
      case "REGISTER_SUCCESS":
        return {
          loading: false,
          success: true,
        };
      case "REGISTER_FAIL":
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
      case "LOGIN_REQUEST":
        return {
          loading: true,
        };
      case "LOGIN_SUCCESS":
        return {
          loading: false,
          success: true,
          currentUser: action.payload,
         
        };
      case "LOGIN_FAIL":
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };

  export const getUserReducer=(state={AllUser:[]},action)=>{
    switch(action.type){
        case 'GET_USER_REQUEST':return{
            loading:true,
            ...state
        }
        case  'GET_USER_SUCCESS':return {
            loading:false,
            AllUser:action.payload,
            success:action.payload
           
        }
        case  'GET_USER_FAILED':return {
            error:action.payload,
            loading:false
        }
            default:return state
    }
}
