

const rootReducer = (state = {articles:[],user:{"username":""}}, action) => {
  switch (action.type) {
    case "ADD_ARTICLE":
       return { ...state, articles: [...state.articles, action.payload] };
       break;

       case "UPDATE_TIME":
       return { ...state, time: action.payload };
       break;

       case "UPDATE_USER":
       return { ...state, user: action.payload };
       break;

    default:
      return state;
  }
};
export default rootReducer;