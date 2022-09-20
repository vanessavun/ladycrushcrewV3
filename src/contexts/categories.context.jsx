import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    //run once to fetch categories for shop
    useEffect(() => {
        const fetchCategories = () => {
            const getCategoriesMap = async() => {
                const categoryMap = await getCategoriesAndDocuments();
                setCategoriesMap(categoryMap);
            }
            getCategoriesMap();
        }
        fetchCategories();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const value = { categoriesMap };

    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}