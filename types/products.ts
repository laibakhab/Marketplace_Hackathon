

export interface Product{
    
    
    _id:string;
    _type : "products";
    title : string;
    price :number;
    productImage: {
        
        asset : {
            _ref : string
            _type : "image";
        }
    };
   
    tags: string;
    description : string;
    dicountPercentage : number;
    isNew : boolean;
    // id: {
    //     _type :"id"
    //     current : string;
    // }........

}