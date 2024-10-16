import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
// ShopContext: You're importing ShopContext to access the all_product array, which contains all the product information.
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  // useContext(ShopContext): You use this hook to get access to the all_product array from the ShopContext.
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      {/* props.banner: The banner image for the category page is passed as a prop to the ShopCategory component. */}
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,i)=>{
          if (props.category===item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            // all_product.map: This iterates over each product in the all_product array and filters products that belong to the current category (props.category
          }
          else{
            return null;
          }
          // Condition: if (props.category === item.category) ensures that only products belonging to the currently selected category are displayed.
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
