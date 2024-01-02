import axios from "axios"

export default class ProductServices{
getProducts(){
    return axios.get("https://localhost:44314/api/products/getall")}
    
getProductByProductId(productId){
return axios.get("http://localhost:44314/api/products/getbyId?productId="+productId)

 
}}


