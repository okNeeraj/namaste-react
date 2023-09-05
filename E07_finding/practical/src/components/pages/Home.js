import ProductList from "../ProductList";

const Home = () => {
	return (
		<div className="page-section">
			<div className="page-header">
				<h1 className="heading">
					<span>Fashion Week</span>
					<span className="mini-heading">Get best deals in Fashion</span>
				</h1>
			</div>
			<ProductList />
		</div>
	)
}

export default Home;
