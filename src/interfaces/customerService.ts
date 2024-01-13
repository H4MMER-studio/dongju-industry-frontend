import { ProductType } from "@/interfaces";

export interface ICustomerServiceInitialState {
    isSubmitSuccess: string;
}

export interface IForm {
    inquiry_type: InquiryType;
    inquiry_title: string;
    inquiry_content: string;
    inquiry_person_name: string;
    inquiry_company_name: string;
    inquiry_phone_number: string;
    inquiry_email: string;
    inquiry_product_type: ProductType["type"] | null;
}

export type InquiryType = "estimate" | "after-service" | "etc";
