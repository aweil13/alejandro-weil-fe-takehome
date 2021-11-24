import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  "businessName": "",
  "grossAnnualSales": 0,
  "contactEmail": "",
  "numEmployees": 0,
  "annualPayroll": 0,
  "locations": "",
  "industryId": "",
}

export const applicationSlice = createSlice({
    name: "application",
    initialState,
    reducers: {
      firstPageApplication: (state, action) => {
        state["businessName"] = action.payload["businessName"];
        state["contactEmail"] = action.payload["contactEmail"];
        state["locations"] = action.payload["locations"];
        state["industryId"] = action.payload["industryId"];
      },
      secondPageApplication: (state, action) => {
        state["grossAnnualSales"] = action.payload["grossAnnualSales"];
        state["numEmployees"] = action.payload["numEmployees"];
        state["annualPayroll"] = action.payload["annualPayroll"];
      }
    }
})


export const { firstPageApplication, secondPageApplication } = applicationSlice.actions

export default applicationSlice.reducer;

// let req = {
//   "businessName": "Plumbing",
//   "grossAnnualSales": 75000,
//   "contactEmail": "alejandroweil13@gmail.com",
//   "numEmployees": 7,
//   "annualPayroll": 100000,
//   "locations": [{"zip": "18032"}],
//   "industryId": "10537",
// }