import { Link } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const ProductCard = (props) => {
	const { id, title, category, image, price } = props.product;
	const { rate, count } = props.product.rating;
	return (
		<div className="product-item">
			<Link to={`${BASE_URL}/product/${id}`}>
				<div className="product-thumb">
					<img src={image} />
				</div>
			</Link>
			<div className="product-body">
				<h3 className="product-title">{title}</h3>
				<p className="product-desc">{category}</p>

				<div className="product-footer">
					<div className="product-price">₹ <span>{price}</span></div>
					<div className="ratings">
						<span className="rating-rate">{rate}</span>
						<span className="rating-icon material-symbols-outlined">
							star
						</span>
						<span className="rating-count">{count}</span>
					</div>
				</div>
			</div>
		</div>
	)
};

export const WithHotLabel = (ProductCard) => {
	return (props) => {
		return (
			<div className="hot-deal">
				<label className="hot-label">HOT 🔥</label>
				<ProductCard {...props} />
			</div>
		)
	}
}

export default ProductCard;
