import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  "businessName": "",
  "grossAnnualSales": 0,
  "contactEmail": "",
  "numEmployees": 0,
  "annualPayroll": 0,
  "locations": [{"zip": ""}],
  "industryId": "",
}

export const applicationSlice = createSlice({
    name: "application",
    initialState,
    reducers: {
      createApplication: (state, action) => {
        state["businessName"] = action.payload[ "businessName"];
        state["grossAnnualSales"] = action.payload["grossAnnualSales"];
        state["contactEmail"] = action.payload["contactEmail"];
        state["numEmployees"] = action.payload["numEmployees"];
        state["annualPayroll"] = action.payload["annualPayroll"];
        state["industryId"] = action.payload["industryId"];
      }
    }
})


export const { createApplication } = applicationSlice.actions

export default applicationSlice.reducer;