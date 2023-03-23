import { configureStore } from "@reduxjs/toolkit";
import ConctactSlice from "./ConctactSlice";
export default configureStore({
    reducer:{
contact : ConctactSlice
    }
}

)


