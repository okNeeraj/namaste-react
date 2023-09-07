const ProductCard = (props) => {
	const { title, category, image, price, rating } = props.product;
	return (
		<div className="product-item">
			<div className="product-thumb">
				<img src={image} />
			</div>
			<div className="product-body">
				<h3 className="product-title">{title}</h3>
				<p className="product-desc">{category}</p>

				<div className="product-footer">
					<div className="product-price">Rs. <span>{price}</span></div>
					<div className="ratings">
						<span className="rating-rate">{rating.rate}</span>
						<span className="rating-icon material-symbols-outlined">
							star
						</span>
						<span className="rating-count">{rating.count}</span>
					</div>
				</div>
			</div>
		</div>
	)
};

export default ProductCard;
