import { field } from "./global.modal";

export const fieldModels:Array<field>=[
    {
        "name": "input"
    },
    {
        "name": "select"
    },
    {
        "name": "checkbox"
    },
    {
        "name": "radio"
    },
    {
        "name": "button"
    }
];

export const modelFields:Array<field>=[];
export const model:any = {
    name:'Form Builder By Nav',
    description:'Form builder will allow you to drap and drop fields',
    attributes:modelFields
};