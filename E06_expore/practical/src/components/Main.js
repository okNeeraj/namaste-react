import ProductList from "./ProductList";

const Main = () => {
	return (
		<main>
			<div className="product-section">
				<div className="product-header">
					<h1 className="heading">Product List</h1>
				</div>
				<ProductList />
			</div>
		</main>
	)
}

export default Main;
