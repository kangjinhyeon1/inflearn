import {useParams} from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function ProductPage(){
    const {id} = useParams();
    const [product, setProducts] = useState(null);
    useEffect(function(){
        axios.get(`https://0df27f83-8083-4e98-83a5-911b8ac85b03.mock.pstmn.io/products/${id}`)
        .then(function(result){
            setProducts(result.data);
        }).catch(function(error){
            console.error(error);
        });
    }, []);
    console.log(product);
    
    return <h1>상품 페이지 {id} 상품</h1>
}

export default ProductPage;