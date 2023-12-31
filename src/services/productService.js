import axios from "axios"

export default class ProductServices{
getProducts(){
    return axios.get("https://localhost:44314/api/products/getall")
    
    
    getProductByProductId(productName){
    return axios.get("http://localhost:/api/products/getbyProductName?productId=" + productName)
}
}}


