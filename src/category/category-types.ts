export interface PriceConfiguration {
    [key: string]: {
        priceType: "base" | "aditional";
        availableOptions: string[];
    };
}

export interface Attribute {
    name: string;
    widgetType: "switch" | "radio";
    defaultValue: string;
    avaliableOptions: string[];
}

export interface Category {
    name: string;
    priceConfiguration: PriceConfiguration;
    attribute: Attribute[];
}
