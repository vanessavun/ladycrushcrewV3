import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import ProductCard from "../../components/product-card/product-card.component";

import {
  selectCategoryMap,
  selectCategoryIsLoading,
} from "../../store/categories/category.selector";

import "./category.styles.tsx";

import Spinner from "../../components/spinner/spinner.component";
import { CategoryContainer, Title } from "./category.styles";

type CategoryRouteParams = {
  category: string;
};

const Category = () => {
  const { category } = useParams<
    keyof CategoryRouteParams
  >() as CategoryRouteParams;

  const categoriesMap = useSelector(selectCategoryMap);
  const isLoading = useSelector(selectCategoryIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <Title>{category.toUpperCase()}</Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
        </CategoryContainer>
      )}
    </>
  );
};

export default Category;
