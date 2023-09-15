import { useDispatch } from "react-redux";
import { removeItem } from "../../../store/cartSlice";

const CartItem = (props) => {
	const { id, title, category, image, price, rating } = props.item;
	const dispatch = useDispatch();

	const handlerRemoveItem = (itemId) => {
		console.log('removed clicked')
		dispatch(removeItem(itemId))
	}

	return (
		<div className="product-list d-block">
			<div className="product-item d-flex gap-4">
				<div className="product-thumb" style={{ height: 100, width: 100 }}>
					<img src={image} />
				</div>
				<div className="product-body">
					<h3 className="product-title" style={{ height: 'auto' }}>{title}</h3>
					<p className="product-desc">{category}</p>

					<div className="product-footer">
						<div className="product-price">₹ <span>Rs. {price}</span></div>
						<div className="ratings">
							<span className="rating-rate">{rating.rate}</span>
							<span className="rating-icon material-symbols-outlined">
								star
							</span>
							<span className="rating-count ps-3 ms-3">{rating.count}</span>
						</div>
					</div>
				</div>
				<div>
					<button className="btn p-1 dull-btn" onClick={() => handlerRemoveItem(id)}>
						<span className="material-symbols-outlined">
							delete
						</span>
					</button>
				</div>
			</div>
		</div>
	)
}

export default CartItem;
