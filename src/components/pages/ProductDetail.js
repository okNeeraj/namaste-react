import { useState, useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";

import { productDetailMock } from "../../utils/mockData";
import { ProductShimmerDetail } from "../Shimmer";

const ProductDetail = () => {
	const [productDetail, setProductDetails] = useState(null);
	const location = useLocation();
	const { productId } = useParams();

	useEffect(() => {
		fetchProductDetails();
	}, []);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location.pathname]);

	const fetchProductDetails = async () => {
		try {
			const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
			if (!response.ok) {
				throw new Error(`Failed to fetch product details. Status: ${response.status}`);
			}
			const data = await response.json();
			setProductDetails(data);
		} catch (error) {
			if (error) {
				setProductDetails(productDetailMock[0]);
			}
			console.error(error);
		}
	};


	if (productDetail === null) {
		return <ProductShimmerDetail />
	}
	const { title, category, image, price, rating, description } = productDetail;
	return (
		<div className="page-section product-details">
			<div className="page-header">
				<nav aria-label="breadcrumb">
					<ol className="breadcrumb">
						<li className="breadcrumb-item">
							<Link to={''}>Home</Link>
						</li>
						<li className="breadcrumb-item">
							<Link to={''}>Products</Link>
						</li>
						<li className="breadcrumb-item active" aria-current="page">{title}</li>
					</ol>
				</nav>
			</div>
			<div className="row">
				<div className="col-5">
					<div className="product-thumb">
						<img src={image} />
					</div>
				</div>
				<div className="col-7">
					<div className="product-info">
						<div className="pr-card">
							<h1 className="heading">
								<span>{title}</span>
								<span className="mini-heading">{category}</span>
							</h1>
							<div className="ratings">
								<span className="rating-rate">{rating.rate}</span>
								<span className="rating-icon material-symbols-outlined">star</span>
								<span className="rating-count">{rating.count} Ratings</span>
							</div>


						</div>
						<div className="pr-card border-0">
							<div className="product-price">
								Rs. <span>{price}</span>
								<span className="off-text">( {Math.floor(Math.random() * (74 - 2 + 1)) + 2} % OFF)</span>
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
							<p>{description}</p>
						</div>
					</div>
				</div>

			</div>
		</div>
	)
}
export default ProductDetail;
