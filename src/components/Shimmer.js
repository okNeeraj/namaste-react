export const ShimmerCard = () => {
	return (
		<div className="shimmer-card card mb-4 border-0" aria-hidden="true">
			<div className="card-body p-0">
				<span className="placeholder-glow col-12">
					<span className="placeholder col-12" style={{ height: '200px' }}></span>
				</span>
				<h5 className="card-title placeholder-glow mt-3">
					<span className="placeholder col-6"></span>
				</h5>
				<p className="card-text placeholder-glow">
					<span className="placeholder col-10"></span>
					<span className="placeholder col-7"></span>
					<span className="placeholder col-12 mt-3" style={{ height: '40px' }}></span>
				</p>
			</div>
		</div>
	)
}

export const ProductShimmer = () => {
	return (
		<div className="product-section">
			<div className="product-header">
				<h1 className="heading">Product List</h1>
			</div>
			<div className="product-container">
				<div className="product-filters">
					<p className="card-text placeholder-glow">
						<span className="placeholder col-10"></span>
						<span className="placeholder col-7"></span>
						<span className="placeholder col-8"></span>
					</p>

					<p className="card-text placeholder-glow mt-4">
						<span className="placeholder col-10"></span>
						<span className="placeholder col-7"></span>
						<span className="placeholder col-8"></span>
					</p>

					<p className="card-text placeholder-glow mt-4">
						<span className="placeholder col-7"></span>
						<span className="placeholder col-11"></span>
						<span className="placeholder col-10"></span>
					</p>
				</div>
				<div className="product-list">
					<ShimmerCard />
					<ShimmerCard />
					<ShimmerCard />
					<ShimmerCard />
					<ShimmerCard />
					<ShimmerCard />
					<ShimmerCard />
					<ShimmerCard />
					<ShimmerCard />
					<ShimmerCard />
				</div>
			</div>
		</div>
	)
}
