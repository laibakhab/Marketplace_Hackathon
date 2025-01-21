import { sources } from "next/dist/compiled/webpack/webpack"
import { title } from "process"
import { defineType } from "sanity"

export const product = defineType({
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            validation: (rule) => rule.required(),
            type: "string"
        },
        {
            name:"description",
            type:"text",
            validation: (rule) => rule.required(),
            title:"Description",
        },
        {
            name: "productImage",
            type: "image",
            validation: (rule) => rule.required(),
            title: "Product Image"
           

        },
        {
            name: "price",
            validation: (rule) => rule.required(),
            type: "number",
            title: "Price",
        },
        {
            name: "tags",
            type: "array",
            validation: (rule) => rule.required(),
            title: "Tags",
            of: [{ type: "string" }]
        },
        {
            name:"dicountPercentage",
            type:"number",
            validation: (rule) => rule.required(),
            title:"Discount Percentage",
        },
        // {
        //     name:"id",
        //     type:"id",
        //     title:"id",
        //     options: {
        //         sources:"product"
        //     }
        // },
       
        {
            name:"isNew",
            validation: (rule) => rule.required(),
            type:"boolean",
            title:"New Badge",
        }
    ]
})