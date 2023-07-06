import React, { useState } from "react";
import { Container } from "react-bootstrap";

// ? imported components
import Pagination from "@components/Pagination";
import Detail from "@components/Detail";
import Question_1 from "@components/Question_1";
import Question_2 from "@components/Question_2";

const questionPages: { [key: number]: React.ReactElement } = {
	1: <Question_1/>,
	2: <Question_2/>
}

function getPage(currentPage: number) {
	return questionPages[currentPage];
}

function Home() {
	const [currentPage, setCurrentPage] = useState(1);
	const lastPage = 8;

	return (
		<>
			<Container fluid>
				<Detail/>
				{getPage(currentPage)}
				<Pagination
					currentPage={currentPage}
					lastPage={lastPage}
					maxLength={7}
					setCurrentPage={setCurrentPage}
				/>
			</Container>
		</>
	)
}

export default Home;