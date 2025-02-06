
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
        name: "slug",
        title: "slug", 
        type: "slug", 
        validation: (rule) => rule.required(),
        options: { 
            source: "title",
            maxLength: 96,
            
         } 
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
        
       
        {
            name:"isNew",
            validation: (rule) => rule.required(),
            type:"boolean",
            title:"New Badge",
        },
        {
            name: "rating",
            type: "number",
            title: "Rating",
            description: "Rating of the product (1 to 5)",
            validation: (Rule) => Rule.min(1).max(5),
          }
      
    ]
})