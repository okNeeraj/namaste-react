const ProductInfo = ({ data, showIndex, setShowIndex }) => {
	return (
		<div className={`accordion-card ${showIndex ? 'active' : ''}`}>
			<div className={`accordion--header`} onClick={setShowIndex}>
				<h4 className="accordion--title">{data.title}</h4>
				<span className="material-symbols-outlined">{showIndex ? 'expand_less' : 'expand_more'}</span>
			</div>
			<div className="accordion--body">
				<p>{data.body}</p>
			</div>
		</div >
	)
}

export default ProductInfo;
