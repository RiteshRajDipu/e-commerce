import { useEffect, useState } from "react";
import "./AllProducts.css";
import { useDispatch } from "react-redux";
import { addToCategory } from "../redux/CategorySlice";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import "./Filters.css";

const Filters = () => {
  // State variables for filters
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);

  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();

  // Dummy data for categories, colors, sizes, and prices
  const colors = [ 'Red', 'Blue', 'Green', 'Yellow'];
  const sizes = [ 'S', 'M', 'L', 'XL'];
  const prices = ['All', '$', '$$', '$$$'];

  useEffect(() => {
    const fetchCategory = async () => {
      await fetch("https://fakestoreapi.com/products/categories")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          
          setCategories(data)});
    };
    fetchCategory();
  }, []);
  



  // Function to handle category selection
  const handleCategoryChange = (category: string) => {
      setSelectedCategory(category === 'All' ? null : category);

      fetchSelectedCategory(category);
      // Additional logic for filtering items based on selected category
  };

  const fetchSelectedCategory = async (category:any) => {
    await fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(addToCategory(data));
        console.log(data);  
    });
  };

  // Function to handle color selection
  const handleColorChange = (color: string) => {
      setSelectedColor(color === 'All' ? null : color);
      // Additional logic for filtering items based on selected color
  };

  // Function to handle size selection
  const handleSizeChange = (size: string) => {
      setSelectedSize(size === 'All' ? null : size);
      // Additional logic for filtering items based on selected size
  };

  // Function to handle price selection
  const handlePriceChange = (price: string) => {
      setSelectedPrice(price === 'All' ? null : price);
      // Additional logic for filtering items based on selected price
  };

  return (
      <div className="sidebar">

          {/* Category filter */}
          <div className="filter">
              <h4>Category</h4>
              
              <ul style={{listStyle:'none', paddingLeft:0}}>
                <li>
                <FormGroup>
                  {categories.map((category, index) => (
                    
                    <FormControlLabel key={index} control={<Checkbox />} label={category}
                    className={selectedCategory === category ? 'selected' : ''}
                    onClick={() => handleCategoryChange(category)}
                    />
                      
                  ))}
                    </FormGroup>
                  </li>
              </ul>
          </div>

          {/* Color filter */}
          <div className="filter">
              <h4>Color</h4>
              <ul>
                  {colors.map((color, index) => (
                      <li key={index}
                          className={selectedColor === color ? 'selected' : ''}
                          onClick={() => handleColorChange(color)}
                      >
                          {color}
                      </li>
                  ))}
              </ul>
          </div>

          {/* Size filter */}
          <div className="filter">
              <h4>Size</h4>
              <ul>
                  {sizes.map((size, index) => (
                      <li key={index}
                          className={selectedSize === size ? 'selected' : ''}
                          onClick={() => handleSizeChange(size)}
                      >
                          {size}
                      </li>
                  ))}
              </ul>
          </div>

          {/* Price filter */}
          <div className="filter">
              <h4>Price</h4>
              <ul>
                  {prices.map((price, index) => (
                      <li key={index}
                          className={selectedPrice === price ? 'selected' : ''}
                          onClick={() => handlePriceChange(price)}
                      >
                          {price}
                      </li>
                  ))}
              </ul>
          </div>
      </div>
  );
};

export default Filters;

