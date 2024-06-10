export interface ProductData {
    title : string
    description : string
    price : number
    imgUrl : string
    id : number
    quantity : number
}

export interface CartType {
    [id : number] : ProductData
}