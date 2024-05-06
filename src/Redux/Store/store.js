import {legacy_createStore as createStore} from "redux";
import { jobListreducer } from "../Reducers/jobListReducer";


export const store = createStore(jobListreducer)