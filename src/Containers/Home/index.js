import React, { useEffect } from "react";
import {useSelector , useDispatch } from "react-redux";
import { fetchAsyncProducts , getAllProducts } from '../../Store/productSlice';
const HomePageContainer = () => {
  const dispatch = useDispatch()
  const products = useSelector(getAllProducts)
  useEffect(() => {
    dispatch(fetchAsyncProducts(10))
  }, [])
  console.log('My All Products' ,products) 
  return (
    <>
      Home HomePageContainer
    </>
  )

}
export default HomePageContainer