import { useState } from "react";
import { productList } from "../utils/productMock";
import ProductCard from "./ProductCard";
import ProductFilter from "./ProductFilters";

const ProductList = () => {
	const [products, setProducts] = useState(productList);


	return (
		<div className="product-section">
			<div className="product-header">
				<h1 className="heading">Product List</h1>
				{/* <ProductFilter /> */}
			</div>
			<div className="product-container">
				<div className="product-filters">

					<button
						onClick={() => {
							const filteredProducts = products.filter(
								(product) => product.rating.rate > 4
							);
							setProducts(filteredProducts)
						}}

					>
						Above 4 Star
					</button>
				</div>
				<div className="product-list">
					{
						products.map(product => <ProductCard key={product.id} product={product} />)
					}
				</div>
			</div>
		</div>
	)
};

export default ProductList;
