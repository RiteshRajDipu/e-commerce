import { useDispatch, useSelector } from 'react-redux';
import './ProductItem.css';
import { addToCart, removeFromCart } from '../redux/CartSlice';

function ProductItem({item} : any) {
  const cart = useSelector((state: any) => state.cart.cart)
  const dispatch = useDispatch();

  const addItemToCart = (item : any) => {
      dispatch(addToCart(item));
  }
  const removeItemFromCart = (item: any) => {
      dispatch(removeFromCart(item));
  }
   
//  async function clickHandler() {
//       const cartPayload = {
//         userId: '2',
//         date: "2020-02-03",
//         products: [{productId: item.id, quantity: 1}]
//       }
//     const response = await fetch('https://fakestoreapi.com/carts',{
//       method:"POST",
//       body:JSON.stringify(
//         cartPayload
//       )
//   })
//   const responseData = await response.json(); // Assuming the response is JSON

// console.log(responseData);
// }

  return (
    <div className='productItem'>
      {/* image */}
       <img style={{width:200, height:200, marginLeft:'auto', marginRight:"auto"}} src={item.image} alt='latest..' />
       {/* title of the product */}
       <p>{item?.title.length>30 ? item.title.substr(0,30): item.title}</p>
       {/* description of the product */}
       {/* <p>{ item.description.length > 60 ? item.description.substr(0,60) : item.description }</p> */}
       {/* price tag */}
        <p>${item.price}</p>
       {/* Add to cart Button */}
       {cart.some((x:any) => x.id === item.id) ? (
             <button onClick={() => removeItemFromCart(item)} className='productItemButton'>Remove from Cart</button>
       ) : (  
          <button onClick={() => addItemToCart(item)} className='productItemButton'>Add to Cart</button>
       )}
      

       <button className='productItemBuy'>Buy Now</button>

    </div>
  )
}

export default ProductItem