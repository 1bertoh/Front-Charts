export type General_Request = {
    "Total_Sales_and_Discounts": Total_Sales_and_Discounts[];
    "Sales_by_Client": Sales_by_Client[];
    "Sales_by_Agent": Sales_by_Agent[];
    "Cid_Sales": Cid_Sales[];
    "UF_Sales": UF_Sales[];
    "Top_Products": Top_Products[]
}

export type Total_Sales_and_Discounts = {
    "Interval": string;
    "Total_Sales_No_IPI": string;
    "Total_Discounts_With_IPI_":string;
    "Total_Discounts_With_Discount":string;
}

export type Sales_by_Client =  {
    "Interval": string;
    "NOMECLI": string;
    "Total_Sales_No_IPI": string;
    "Total_Discounts_With_IPI_":string;
    "Total_Discounts_With_Discount":string;
}

export type Sales_by_Agent = {
    "Interval": string;
    "CODREPRM": number;
    "Total_Sales_No_IPI": string;
    "Total_Discounts_With_IPI_":string;
    "Total_Discounts_With_Discount":string;
}

export type Cid_Sales = {
    "Interval": string;
    "CIDCLI": string;
    "Total_Sales_No_IPI": string;
    "Total_Discounts_With_IPI_":string;
    "Total_Discounts_With_Discount":string;
}

export type UF_Sales = {
    "Interval": string;
    "UFCLI": string;
    "Total_Sales_No_IPI": string;
    "Total_Discounts_With_IPI_":string;
    "Total_Discounts_With_Discount":string;
}

export type Top_Products = {
    "Interval": string;
    "NOME_MERCA": string;
    "CODMERCRM": number;
    "Total_Sales_No_IPI": string;
    "Total_Discounts_With_IPI_":string;
    "Total_Discounts_With_Discount":string;
    "Frequency": number;
}