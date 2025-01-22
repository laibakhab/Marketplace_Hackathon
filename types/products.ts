

// export interface Product{
    
    
//     _id:string;
//     _type : "products";
//     title : string;
//     price :number;
//     productImage: {
        
//         asset : {
//             _ref : string
//             _type : "image";
//         }
//     };
   
//     tags: string;
//     description : string;
//     dicountPercentage : number;
//     isNew : boolean;
//     slug: {
//         current : string;
//     }

// }

export interface Product {
  title: string;
  
    _id:string;
  
   category: string;
   type: "product";
   productImage :{
                asset : {
                   _ref : string
                    _type : "image";
              }
            };
   slug: {
    
     current: string;
   };
   price: number;
   description :string
 }