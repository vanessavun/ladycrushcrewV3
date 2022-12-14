import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

import { fetchCategoriesStartAsync } from '../../store/categories/category.action';

import "./shop.styles.scss";

const Shop = () => {
  const dispatch = useDispatch();

  //Categories Map
  useEffect(() => {
    const fetchCategories = () => {
      dispatch(fetchCategoriesStartAsync())
    }
    fetchCategories();
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
