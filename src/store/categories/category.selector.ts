import { createSelector } from "reselect";

import { CategoriesState } from "./category.reducer";
import { CategoryMap } from "./category.types";

const selectCategoryReducer = (state): CategoriesState => state.categories;

const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoryMap = createSelector(
  [selectCategories],
  (categories): CategoryMap => categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {} as CategoryMap)
);

export const selectCategoryIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);