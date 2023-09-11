import { useState } from 'react';

const ProductInfo = ({ data, showItems, setShowIndex, }) => {
	const accordionHandler = () => {
		setShowIndex();
	}

	return (
		<div className="accordion-card">
			<div className="accordion--header" onClick={accordionHandler}>
				<h4 className="accordion--title">{data.title}</h4>
				<span className="material-symbols-outlined">{showItems ? 'expand_less' : 'expand_more'}</span>
			</div>
			{showItems && (
				<div className="accordion--body">
					<p>{data.body}</p>
				</div>
			)}
		</div>
	)
}

export default ProductInfo;
