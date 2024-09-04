import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data/products'
import Product from '../components/Product';

function ProductDetails() {

  const { id } = useParams();

  return (
    <div>
      <h3 style={{margin:'auto', textAlign:'center', marginTop:'20px',fontSize:'20px', color:'burlywood'}} >Ürün Açıklaması</h3>
      <h />
      {
        products && products.map((product) => {

          if (product.id == id) {
            return <Product product={product} />
          }
        })


      }



    </div>
  )
}


export default ProductDetails