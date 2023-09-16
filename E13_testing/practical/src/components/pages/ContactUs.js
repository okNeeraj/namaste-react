const ContactUs = () => {
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="text-center my-4">
					<h1 className="heading">Contact Us</h1>
					<p>Write your query, we shall get back to you soon.</p>
				</div>
				<div className="col-6">
					<div className="card p-5 mb-5">
						<form className="needs-validation" noValidate>
							<div className="form-row">
								<div className="col-12 mb-3">
									<label>Name</label>
									<input type="text" className="form-control" placeholder="Enter Name" />
								</div>
								<div className="col-12 mb-3">
									<label>Email</label>
									<input type="text" className="form-control" placeholder="Enter Name" />
								</div>
								<div className="col-12 mb-3">
									<label>Your Message</label>
									<textarea className="form-control" placeholder="Enter Your Message" />
								</div>
							</div>
							<div className="d-flex justify-content-end">
								<button className="btn btn-primary" type="submit">Submit form</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>

	)
}

export default ContactUs;
