import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as CustomerServiceComponents from "./Components";
import { Images } from "public/image";
import useResize from "@/hooks/useResize";
import { IForm } from "@/interfaces";
import { useDispatch } from "react-redux";
import { customerServiceActions } from "@/store";
import { useRouter } from "next/router";
import { useGetStore } from "@/hooks";
import { Widgets } from "@/components";

interface Iprops {
    questionType: "estimate" | "A/S" | "ETC";
    clickContact: (type: "estimate" | "A/S" | "ETC") => void;
    closeForm: () => void;
}

const AlertLayout = styled.div`
    padding: 20px;
`;

const CustomerServiceContainerLayout = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

const ServiceLayout = styled.div`
    margin-right: 16px;

    @media (max-width: 1633px) {
        &:nth-child(2n) {
            margin-right: 0px;
        }

        &:nth-child(-1n + 2) {
            margin-bottom: 16px;
        }
    }

    @media (max-width: 1024px) {
        margin: 0px;
    }
`;

const Layouts = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 1633px) {
        width: 556px;
        flex-wrap: wrap;
    }

    @media (max-width: 1023px) {
        display: block;
        width: 100%;
        padding: 33px 16px;
        height: calc(100vh - 64px);
    }
`;

const CustomerServiceContainer: React.FC<Iprops> = ({ questionType, clickContact, closeForm }) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { isSubmitSuccess } = useGetStore.customerService();
    const { width } = useResize();
    const [isOpenAlert, setIsOpenAlert] = useState(true);

    useEffect(() => {
        if (Boolean(isSubmitSuccess)) {
            router.push("/customer-service/inquiry");
            dispatch(customerServiceActions.setIsSubmitSuccess(""));
        }
    }, [isSubmitSuccess]);

    const clickSubmit = (form: IForm) => {
        dispatch(customerServiceActions.postInquiryProduct(form));
    };

    return (
        <CustomerServiceContainerLayout>
            {isOpenAlert && (
                <Widgets.Layout.ModalLayout
                    onClose={() => {
                        setIsOpenAlert(false);
                    }}>
                    <AlertLayout>
                        ?????? ??? ????????? ????????? ????????????.
                        <br /> ????????? ????????? 032-579-8272 ????????? ???????????????.
                    </AlertLayout>
                </Widgets.Layout.ModalLayout>
            )}
            <Layouts>
                <ServiceLayout>
                    <CustomerServiceComponents.Service
                        title="?????? ??????"
                        infoMessage="????????? ????????? ?????? ?????? ??????"
                        backgroundImageSrc={Images.EsitmateBackground}
                        clickContact={() => clickContact("estimate")}
                    />
                </ServiceLayout>
                <ServiceLayout>
                    <CustomerServiceComponents.Service
                        title="A/S ??????"
                        infoMessage="?????? ??? ?????? ??? ?????? ?????? ??????"
                        backgroundImageSrc={Images.ASBackground}
                        clickContact={() => clickContact("A/S")}
                    />
                </ServiceLayout>
                <ServiceLayout>
                    <CustomerServiceComponents.Service
                        title="??? ??? ??????"
                        infoMessage="?????? ?????? ??????"
                        backgroundImageSrc={Images.ETCBackground}
                        clickContact={() => clickContact("ETC")}
                    />
                </ServiceLayout>
                {width > 1023 && <CustomerServiceComponents.InfoCard backgroundImageSrc={Images.InfoBackground} />}
            </Layouts>
            {questionType && (
                <CustomerServiceComponents.FormModal
                    questionType={questionType}
                    closeForm={closeForm}
                    clickSubmit={clickSubmit}
                />
            )}
        </CustomerServiceContainerLayout>
    );
};

export default CustomerServiceContainer;
