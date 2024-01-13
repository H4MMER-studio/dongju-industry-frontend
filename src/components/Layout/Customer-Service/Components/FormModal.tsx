import React from "react";
import styled from "styled-components";
import { Widgets } from "@/components";
import EstimateForm from "./EstimateForm";
import useResize from "@/hooks/useResize";
import { IForm, InquiryType } from "@/interfaces";

interface Iprops {
    questionType?: InquiryType;
    closeForm: () => void;
    clickSubmit: (form: IForm) => void;
}

const FormModal: React.FC<Iprops> = ({ questionType, closeForm, clickSubmit }) => {
    const { width } = useResize();

    const displayForm = (type: "estimate" | "after-service" | "etc") => {
        return <EstimateForm inquiryType={type} closeForm={closeForm} clickSubmit={clickSubmit} />;
    };

    const setModalStyle = () => {
        if (width <= 1023) {
            return { width: "100%", margin: 0, height: "100%", maxHeight: "none" };
        }
    };

    return (
        <Widgets.Layout.ModalLayout onClose={() => {}} paperStyle={setModalStyle()}>
            <FormLayout>{displayForm(questionType)}</FormLayout>
        </Widgets.Layout.ModalLayout>
    );
};

export default FormModal;

const FormLayout = styled.div`
    width: 720px;
    height: 795px;
    background-color: #fff;
    padding: 20px;

    @media (max-width: 1023px) {
        width: 100%;
        padding-top: 84px;
    }
`;
