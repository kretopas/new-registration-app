function Header() {
	const getCurrentDate = () => {
		const date = new Date();
		const result = date.toLocaleDateString('th-TH', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			weekday: 'long',
		});
		return result;
	};

	return (
		<>
			<div style={{textAlign: "end"}}>
				<h3>{getCurrentDate()}</h3>
			</div>
		</>
	)
}

export default Header;