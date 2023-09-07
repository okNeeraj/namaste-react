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
	)
}

export const ProductShimmerDetail = () => {
	return (
		<div className="page-section product-details">
			<div className="page-header placeholder-glow">
				<span className="placeholder col-10" style={{ height: '34px' }}></span>
			</div>
			<div className="row">
				<div className="col-5">
					<span className="placeholder-glow col-12">
						<span className="placeholder col-12" style={{ height: '500px' }}></span>
					</span>
				</div>
				<div className="col-7">
					<div className="product-info">
						<div className="pr-card border-0">
							<h1 className="heading">
								<span className="placeholder col-10"></span>
								<span className="placeholder col-5"></span>
							</h1>
							<span className="placeholder col-3"></span>
						</div>
						<div className="pr-card border-0">
							<div className="product-price">
								<span className="placeholder col-4" style={{ height: '40px' }}></span>
							</div>
						</div>

						<div className="product-actions">
							<span className="placeholder col-4" style={{ height: '60px' }}></span>
							<span className="placeholder col-4" style={{ height: '60px' }}></span>
						</div>
						<div className="product-desc">
							<span className="placeholder col-3" style={{ height: '30px', marginBottom: '8px' }}></span>
							<span className="placeholder col-12"></span>
							<span className="placeholder col-8"></span>
							<span className="placeholder col-11"></span>
							<span className="placeholder col-10"></span>
						</div>
					</div>
				</div>

			</div>
		</div>
	)
}

export const ProfileShimmer = () => {
	return (
		<div className="user-details placeholder-glow">
			<span className="placeholder col-7"></span>
			<span className="placeholder col-12"></span>
			<span className="placeholder col-8"></span>
			<span className="placeholder col-9"></span>
			<span className="placeholder col-4"></span>
			<ul className="list-group border-0 px-0 mb-3">
				<li className="list-group-item border-0 px-0">
					<span className="placeholder col-3"></span>
				</li>
			</ul>
		</div>
	)
}
