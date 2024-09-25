// import React from "react";
// import { configureStore, createSlice } from "@reduxjs/toolkit";
// import { createStore } from "@reduxjs/toolkit";

// const addReducer = (state, action) => {
//   switch (action.type) {
//     case "ADD":
//       return state++;
//     case "SUB":
//       return state--;
//     default:
//       return state;
//   }
// };

// export const store = createStore(addReducer);
// ///=-------------------------------------------------

// //redux/toolkit

// //in production level it is recommended to use redux/toolkit
// //becuase it makes easy to work on redux 
// //by using it we can create slices for every different feature
// //slice is nothing but an objet which will contain the reducer, init state, action for that perticular feature



// //we use configureStore() to create store and pass all the reducers

// // const store = configureStore({
// //     reducer: {
// //         add: addReducer,
// //         sub: subReducer,
// //     },
// //     middleware:{

// //     }
// // })


// //create slice for add using createSlice from redux/toolkit
// //in addSlice.js file

// const addSlice = createSlice({
//     initialState: 0,
//     reducers:{
//         addReducer: (state, action) => {
//             switch (action.type) {
//               case "ADD":
//                 return state++;
//               case "SUB":
//                 return state--;
//               default:
//                 return state;
//             }
//         }
//     }
// })

// export default addSlice.reducer;

// // const store = configureStore({
// //     reducer:{
// //         addReducer
// //     }
// // })

// /////-----------------
// //remaining part will same to provide this store to app
// //then dispatch using useDispatch()
// //then select state using useSelecter()