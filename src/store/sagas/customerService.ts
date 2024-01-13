import { call, put, takeEvery } from "redux-saga/effects";
import { API, INQUIRY_API } from "@/utils";
import { customerServiceActions } from "../module/customerService";
import { IForm, ActionType } from "@/interfaces";

export function* postInquiryProductSaga({ payload }: ActionType & { payload: IForm }) {
    try {
        yield call(API.POST, INQUIRY_API, { bodyData: payload });
        yield put(customerServiceActions.setIsSubmitSuccess("true"));

        alert("문의 완료");
    } catch (error) {
        alert("문의를 처리하는 도중에 오류가 발생하였습니다.");
        // yield put(customerServiceActions.setIsSubmitSuccess('true'));
    }
}

export function* watchPostInquiryProduct() {
    yield takeEvery(customerServiceActions.postInquiryProduct, postInquiryProductSaga);
}

export default [watchPostInquiryProduct].map((fn) => fn());
