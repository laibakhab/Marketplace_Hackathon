
export interface Product {
    
    quantity: number;
    products: number;
    amount : number;

  _id: string;
  _type:"product";
     title : string;
   productImage :{
                asset : {
                   _ref : string;
                    _type : "image";
              }
            };
            slug: {
     
              current: string;
            };
   price: number;
   dicountPercentage : number;
   isNew : boolean;
   description :string;
   rating: number;
   comments: any;

  


 

 }

