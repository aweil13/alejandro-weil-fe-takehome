import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  "businessName": "",
  "contactEmail": "",
  "grossAnnualSales": 0,
  "annualPayroll": 0,
  "numEmployees": 0,
  "industryId": "",
  "locations": [{"zip": ""}]
}

export const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {
    
  }
})