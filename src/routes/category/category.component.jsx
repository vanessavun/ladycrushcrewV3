import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import ProductCard from '../../components/product-card/product-card.component';
import { selectCategoriesMap } from '../../store/categories/category.selector';

import './category.styles.scss';

const Category = () => {
    const { category } = useParams();
    console.log('render/re-rendering category component')
    const categoriesMap = useSelector(selectCategoriesMap);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        console.log('effect fired calling setProducts')
        setProducts(categoriesMap[category])
    }, [category, categoriesMap]);

    return (
        <>
            <h2 className='category-title'>{category.toUpperCase()}</h2>
            <div className='category-container'>
                {products && 
                    products.map((product) => <ProductCard product={product} key={product.id} />)
                }
            </div>
        </>
    )
};

export default Category;