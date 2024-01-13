import React from "react";
import Router, { useRouter } from "next/router";
import { CustomerService } from "@/components";
import { InquiryType } from "@/interfaces";

const CustomerServiceView: React.FC = () => {
    const route = Router;
    const query = useRouter().query as { question: InquiryType };

    const clickContact = (type: InquiryType) => {
        switch (type) {
            case "estimate":
                route.push("/customer-service/inquiry?question=estimate");
                break;

            case "after-service":
                route.push("/customer-service/inquiry?question=after-service");
                break;

            case "etc":
                route.push("/customer-service/inquiry?question=etc");
                break;

            default:
                break;
        }
    };

    const closeForm = () => {
        route.push("/customer-service/inquiry");
    };

    return (
        <CustomerService.Container questionType={query.question} clickContact={clickContact} closeForm={closeForm} />
    );
};

export default CustomerServiceView;
