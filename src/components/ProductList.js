import { useEffect, useState } from "react";
import { ProductShimmer } from "./Shimmer";
import { productList } from "../utils/mockData";
import ProductCard from "./ProductCard";

const ProductList = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetchProducts();
	}, [])

	const fetchProducts = async () => {
		// const data = await fetch("https://fakestoreapi.com/products");
		// const products = await data.json();
		// setProducts(productList)

		setTimeout(() => {
			setProducts(productList)
		}, 1000);
	}

	return products.length === 0 ? <ProductShimmer /> : (
		<div className="product-section">
			<div className="product-header">
				<h1 className="heading">Product List</h1>
			</div>
			<div className="product-container">
				<div className="product-filters">
					<h6 className="mb-3 border-bottom pb-2">Filters</h6>
					<button
						className="btn btn-sm btn-secondary w-100"
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
