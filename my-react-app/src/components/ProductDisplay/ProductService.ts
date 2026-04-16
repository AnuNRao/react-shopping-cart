import axios from 'axios';
import type { ApiProductResponse } from '../../types.';


//Api call to get list of products
export async function fetchProducts(): Promise<ApiProductResponse[]>{
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
}




