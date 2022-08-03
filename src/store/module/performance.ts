import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPerformanceInitialState, IGetDeliveryListParams } from '@/interfaces';

const initialState: IPerformanceInitialState = {
  deliveryList: { list: [], size: 0 },
  searchList: [],
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
    setSearchList: (state, { payload }: PayloadAction<string[]>) => {
      state.searchList = payload;
    },
    getDeliveryList: (_, __: PayloadAction<IGetDeliveryListParams>) => {},
  },
});

export const selectPerformanceState = createSelector(
  (state: IPerformanceInitialState) => state.deliveryList,
  (state: IPerformanceInitialState) => state.searchList,
  (deliveryList, searchList) => {
    return {
      deliveryList,
      searchList,
    };
  }
);

export const performance = slice.name;
export const performanceReducer = slice.reducer;
export const performanceActions = slice.actions;

export default performanceReducer;
