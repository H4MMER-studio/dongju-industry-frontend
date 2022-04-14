import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICustomerServiceInitialState, IForm } from '@/interfaces';

const initialState: ICustomerServiceInitialState = { isSubmitSuccess: '' };

const slice = createSlice({
  name: 'customerServiceReducer',
  initialState,
  reducers: {
    setIsSubmitSuccess: (state, { payload }: PayloadAction<string>) => {
      state.isSubmitSuccess = payload;
    },
    postInquiryProduct: (_, __: PayloadAction<IForm>) => {},
  },
});

export const selectCustomerServiceState = createSelector(
  (state: ICustomerServiceInitialState) => state.isSubmitSuccess,
  (isSubmitSuccess) => {
    return {
      isSubmitSuccess,
    };
  }
);

export const customerService = slice.name;
export const customerServiceReducer = slice.reducer;
export const customerServiceActions = slice.actions;

export default customerServiceReducer;
