import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPerformanceInitialState } from '@/interfaces';

const initialState: IPerformanceInitialState = {
  deliveryList: [],
};

const slice = createSlice({
  name: 'performanceReducer',
  initialState,
  reducers: {
    setDeliveryList: (
      state,
      { payload }: PayloadAction<IPerformanceInitialState['deliveryList']>
    ) => {
      state.deliveryList = payload;
    },
    getDeliveryList: (_, __: PayloadAction) => {},
  },
});

export const selectPerformanceState = createSelector(
  (state: IPerformanceInitialState) => state.deliveryList,
  (deliveryList) => {
    return {
      deliveryList,
    };
  }
);

export const performance = slice.name;
export const performanceReducer = slice.reducer;
export const performanceActions = slice.actions;

export default performanceReducer;
