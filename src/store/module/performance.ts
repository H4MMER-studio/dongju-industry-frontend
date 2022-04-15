import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPerformanceInitialState, IGetDeliveryListParams } from '@/interfaces';

const initialState: IPerformanceInitialState = {
  deliveryList: { list: [], size: 0 },
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
    getDeliveryList: (_, __: PayloadAction<IGetDeliveryListParams>) => {},
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
