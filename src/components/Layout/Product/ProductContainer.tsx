import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ProductType } from "@/interfaces";
import * as ProductComponents from "./components";
import { Product } from "@/components";
import { mixins } from "@/styles";
import { PRODUCT_MANUAL_DATA } from "@/utils";
import { useDispatch } from "react-redux";
import { customerServiceActions } from "@/store";
import { IForm } from "@/interfaces";
import { useRouter } from "next/router";
import { useGetStore } from "@/hooks";
import useResize from "@/hooks/useResize";

interface Iprops {
    productType: ProductType["type"];
}

const ProductContainerLayout = styled.div`
    ${mixins.flexSet("space-between", "unset")}
    width: 100%;
    min-width: 0;
    height: 100%;
    padding-right: 8px;

    @media (max-width: 1365px) {
        display: block;
        overflow-y: auto;
    }

    @media (max-width: 1024px) {
        padding: 0 16px 0;
    }
`;

const ProductManualLayout = styled.div`
    padding: 24px 24px 0 0;

    @media (max-width: 1365px) {
        padding-right: 0px;
        margin-bottom: 48px;
    }
`;

const TableLocation = styled.section`
    width: 100%;
    min-width: 0;
    margin-right: 16px;

    @media (max-width: 1365px) {
        margin-right: 0px;
    }
`;

const ProductContainer: React.FC<Iprops> = ({ productType }) => {
    const [selectedProductManual, setSelectedProductManual] = useState(
        PRODUCT_MANUAL_DATA[productType ?? "air-conditioner"]
    );
    const [openContact, setOpenContact] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState(null);
    const { width } = useResize();

    const dispatch = useDispatch();
    const { isSubmitSuccess } = useGetStore.customerService();

    useEffect(() => {
        if (Boolean(isSubmitSuccess)) {
            setOpenContact(false);
            dispatch(customerServiceActions.setIsSubmitSuccess(""));
        }
    }, [isSubmitSuccess]);

    useEffect(() => {
        setSelectedProductManual(PRODUCT_MANUAL_DATA[productType]);
        setSelectedMenu(null);
    }, [productType]);

    const renderProduct = (type: ProductType["type"]) => {
        switch (type) {
            case "air-conditioner":
                return <Product.AirConditioner selectedMenu={selectedMenu} />;
            case "freeze-protection-damper-coil":
                return <Product.DamperCoilDetail selectedMenu={selectedMenu} />;
            case "exhaust-unit":
                return <Product.ExhaustUnit selectedMenu={selectedMenu} />;
            case "bubble-damper":
                return <Product.BubbleDamper selectedMenu={selectedMenu} />;
            case "fully-sealed-door":
                return <Product.FullySealedDoor selectedMenu={selectedMenu} />;
            case "air-blower":
                return <Product.AirBlower selectedMenu={selectedMenu} />;
            case "exhaust-pan":
                return <Product.ExhaustPan selectedMenu={selectedMenu} />;
        }
    };

    const clickContact = () => {
        setOpenContact(true);
    };

    const clickSubmit = (form: IForm) => {
        dispatch(customerServiceActions.postInquiryProduct(form));
    };

    const clickMenu = (id: string) => {
        const element = document.getElementById(id);
        const scrollTop = element.getBoundingClientRect().top;
        setSelectedMenu(id);

        if (width > 1024) {
            element.scrollIntoView({ behavior: "smooth" });
        } else {
            scrollTo({
                top: scrollTop - 74,
                behavior: "smooth",
            });
        }
    };

    return (
        <>
            <ProductContainerLayout>
                <ProductManualLayout>
                    <ProductComponents.ProductManual
                        productMenu={selectedProductManual}
                        selectedMenu={selectedMenu}
                        clickContact={clickContact}
                        clickMenu={clickMenu}
                    />
                </ProductManualLayout>
                <TableLocation>{renderProduct(productType)}</TableLocation>
            </ProductContainerLayout>
            {openContact && (
                <ProductComponents.FormModal
                    selectedProduct={productType}
                    closeForm={() => setOpenContact(false)}
                    clickSubmit={clickSubmit}
                />
            )}
        </>
    );
};

export default ProductContainer;
