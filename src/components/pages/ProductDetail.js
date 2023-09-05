import { useState, useEffect } from "react";

const ProductDetail = () => {
	const [productDetail, setProductDetails] = useState(null);
	useEffect(() => {
		// fetchProductDetails();
	}, [])

	const fetchProductDetails = async () => {
		const data = await fetch('https://fakestoreapi.com/products/1');
		const productDetail = await data.json();
		setProductDetails(productDetail);
	}
	// const { id, title, category, image, price, rating } = productDetail;
	return (
		<div className="page-section product-details">
			<div className="page-header">
				<nav aria-label="breadcrumb">
					<ol className="breadcrumb">
						<li className="breadcrumb-item"><a href="#">Home</a></li>
						<li className="breadcrumb-item"><a href="#">Product</a></li>
						<li className="breadcrumb-item active" aria-current="page">Product Title</li>
					</ol>
				</nav>
			</div>
			<div className="row">
				<div className="col-5">
					<div className="product-thumb">
						<img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
					</div>
				</div>
				<div className="col-7">
					<div className="product-info">
						<div className="pr-card">
							<h1 className="heading">
								<span>{ } Product Title</span>
								<span className="mini-heading">Get best deals from best Seller</span>
							</h1>
							<div className="ratings">
								<span className="rating-rate">4.5</span>
								<span className="rating-icon material-symbols-outlined">star</span>
								<span className="rating-count">345 Ratings</span>
							</div>


						</div>
						<div className="pr-card border-0">
							<div className="product-price">
								Rs. <span>3456</span>
								<span className="off-text">( 49 % OFF)</span>
							</div>
							<div className="price-note">inclusive of all taxes</div>
						</div>

						<div className="product-actions">
							<a href="#" className="btn btn-lg btn-primary">
								<span className="icon-lg material-symbols-outlined">shopping_bag</span>
								<span>ADD TO BAG</span>
							</a>
							<a href="#" className="btn btn-lg btn-secondary">
								<span className="icon-lg material-symbols-outlined">favorite</span>
								<span>WISHLIST</span>
							</a>
						</div>
						<div className="product-desc">
							<h4 className="mb-2">Product Details</h4>
							<p>Roadster size chart was good as expceted and as always, it was a great product, but it was a bit loss which is a good and bad thing a a same time. It was to comfertable and at the same time a bit lose, and on the positive side from my prospective I love a bit loss clothes. So i found it a great product for me at this price piont of view</p>
						</div>
					</div>
				</div>

			</div>
		</div>
	)
}
export default ProductDetail;
