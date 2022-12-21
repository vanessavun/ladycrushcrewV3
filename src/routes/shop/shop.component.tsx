import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { ShopContainer, ShopHeader} from "./shop.styles";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { fetchCategoriesStart } from '../../store/categories/category.action';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCategories = () => {
      dispatch(fetchCategoriesStart());
    }
    fetchCategories();
  }, [dispatch]);

  return (
    <ShopContainer>
      <ShopHeader>
        <h1>Thank you for supporting Lady Crush Crew to uplift lady and non-binary crushers</h1>
        <p>For special orders or bulk order inquiries, please contact us and we will do our best to take care of you!</p>
      </ShopHeader>
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
    </ShopContainer>
  );
};

export default Shop;
