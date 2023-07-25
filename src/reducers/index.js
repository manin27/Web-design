import { combineReducers } from "redux";
import TestReducers from "./test";
import React from "react";
import active from "./test-active";

const allReducers = combineReducers ({ 
    test: TestReducers, 
    activetest: active
})

export default allReducers;