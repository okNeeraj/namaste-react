import { useEffect, useState } from "react";
import { ProductShimmer } from "./Shimmer";
import { productList } from "../utils/mockData";
import ProductCard from "./ProductCard";

const ProductList = () => {
	const [products, setProducts] = useState([]);
	const [filterProducts, setFilterProducts] = useState([]);
	const [searchText, setSearchText] = useState('');

	useEffect(() => {
		fetchProducts();
	}, [])

	const fetchProducts = async () => {
		try {
			const response = await fetch("https://fakestoreapi.com/products");
			if (!response.ok) {
				throw new Error(`Failed to fetch products. Status: ${response.status}`);
			}
			const products = await response.json();
			setProducts(products)
			setFilterProducts(products)
		} catch (error) {
			if (error) {
				setProducts(productList)
				setFilterProducts(productList)
			}
			console.error(error);
		}
	};

	return products.length === 0 ? <ProductShimmer /> : (
		<div className="product-container">
			<div className="product-filters">
				<h6 className="mb-3 border-bottom pb-2 d-flex justify-content-between">
					<span>Filters</span>
					<span
						className="text-secondary"
						style={{ cursor: 'pointer', fontSize: '12px' }}
						onClick={() => {
							setFilterProducts(productList)
							setSearchText('')
						}}
					>
						Reset
					</span>
				</h6>
				<div className="product-search d-flex gap-2 mb-4">
					<input
						type="text"
						className="form-control"
						placeholder="Search Product"
						value={searchText}
						onChange={(e) => {
							setSearchText(e.target.value)
						}}
					/>
					<button className="btn btn-primary d-flex" onClick={() => {
						const filteredSearch = products.filter((product) =>
							product.title.toLowerCase().includes(searchText.toLowerCase())
						)
						filteredSearch.length !== 0 ? setFilterProducts(filteredSearch) : ''
					}}>
						<span className="material-symbols-outlined">
							search
						</span>
					</button>
				</div>
				<button
					className="btn btn-sm btn-secondary w-100"
					onClick={() => {
						const filteredProducts = products.filter(
							(product) => product.rating.rate > 4
						);
						setFilterProducts(filteredProducts)
					}}

				>
					Above 4 Star
				</button>
			</div>
			<div className="product-list">
				{
					filterProducts.map(product => <ProductCard key={product.id} product={product} />)
				}
			</div>
		</div>
	)
};

export default ProductList;
