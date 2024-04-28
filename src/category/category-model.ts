import mongoose from "mongoose";

interface PriceConfiguration {
    [key: string]: {
        priceType: "base" | "aditional";
        availableOptions: string[];
    };
}

interface Attribute {
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

const priceConfigurationSchema = new mongoose.Schema<PriceConfiguration>({
    priceType: {
        type: String,
        enum: ["base", "aditional"],
        required: true,
    },
    availableOptions: {
        type: [String],
        required: true,
    },
});

const attributeSchema = new mongoose.Schema<Attribute>({
    name: {
        type: String,
        required: true,
    },
    widgetType: {
        type: String,
        enum: ["switch", "radio"],
        required: true,
    },
    defaultValue: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
    },
    avaliableOptions: {
        type: [String],
        required: true,
    },
});

//model
const categorySchema = new mongoose.Schema<Category>({
    name: {
        type: String,
        required: true,
    },

    priceConfiguration: {
        type: Map,
        of: priceConfigurationSchema,
        required: true,
    },
    attribute: {
        type: [attributeSchema],
        required: true,
    },
});

export default mongoose.model("Category", categorySchema);