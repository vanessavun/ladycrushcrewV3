import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { ShopContainer, ShopHeader} from "./shop.styles";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { fetchCategoriesStart } from '../../store/categories/category.action';
import PageHeader from "../../components/page-header/page-header.component";
import Footer from "../../components/footer/footer.component";

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
      <PageHeader title="Shop" emote="🧥" />
      <ShopHeader>
        <h2>Thank you for supporting Lady Crush Crew to uplift lady and non-binary crushers</h2>
        <p>For special orders or bulk order inquiries, please contact us and we will do our best to take care of you!</p>
      </ShopHeader>
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
    <Footer />
    </ShopContainer>
  );
};

export default Shop;
