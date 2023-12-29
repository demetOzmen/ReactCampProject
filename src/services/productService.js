import axios from "axios"

export default class ProductServices{
getProducts(){
    return axios.get("https://localhost:44314/api/products/getall")
}}
{/*getProductByProductName(productName){
    return axios.get("http://localhost:/api/products/getbyProductName?productName=" + productName)
}*/}

