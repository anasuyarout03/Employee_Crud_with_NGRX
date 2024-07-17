import { StoreModule } from "@ngrx/store";
import { rootReducer } from "../reducer/reducers";
export const myStore = StoreModule.forRoot(rootReducer);