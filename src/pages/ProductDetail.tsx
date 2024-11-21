import React from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'

type Props = {}

const ProductDetail = (props: Props) => {
  const params = useParams();
  const location = useLocation();
  const [searchParams,setSearchParams] = useSearchParams()
  console.log(searchParams);
  
  return (
    <div>ProductDetail</div>
  )
}

export default ProductDetail