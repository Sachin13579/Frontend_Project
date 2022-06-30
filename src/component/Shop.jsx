import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { getdata } from "./Redux/Product/action";
import { useSelector, useDispatch } from "react-redux";
import { Text } from "@chakra-ui/react";
import Filter from "./filter";
import Product from "./Product";
const Shop = () => {
  // const [product, setProduct] = useState([]);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const product = useSelector((state) => state.product);
  console.log(product);

  const dispatch = useDispatch();
  useEffect(() => {
    
    if (product?.length === 0) {
      dispatch(getdata())
    }
  }, [dispatch, product.length]);
  return (
    // product.map((e)=>{
    //   return <p>{e.name}</p>

    // })
    <div>
      <Text>Shop All</Text>
      <Filter></Filter>
      {loading ? 
        <Text>Loading...</Text>
       : error ? 
        <Text>Error...</Text>
       : 
        <div>
          {product.length > 0 &&
            product.map((e) => {
              return <Product key={e.id} e={e}></Product>;
            })}
        </div>
      }
    </div> 
  );
};

export default Shop;
