import { createSlice } from "@reduxjs/toolkit";

// Define the initial state using that type
const initialState = {
  proposalIDs: [],
  AllProposals: [],
  MyProposals: [],
  userAddress: "",
  VoteableProposals: [],
};

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setProposalIDs: (state, action) => {
      state.proposalIDs = action.payload;
    },
    setAllProposals: (state, action) => {
      state.AllProposals = [...state.AllProposals, action.payload];
    },
    addProposal: (state, action) => {
      state.AllProposals.push(action.payload);
    },
    setMyProposals: (state, action) => {
      state.MyProposals = [...state.MyProposals, action.payload];
    },
    setUserAddress: (state, action) => {
      state.userAddress = action.payload;
    },
    setVoteableProposals: (state, action) => {
      state.VoteableProposals = [...state.VoteableProposals, action.payload];
    },
  },
});

export const {
  setProposalIDs,
  setAllProposals,
  setMyProposals,
  setUserAddress,
  setVoteableProposals,
} = userSlice.actions;

export default userSlice.reducer;
