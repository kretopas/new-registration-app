import React, { useState } from "react";
import { Container } from "react-bootstrap";

// ? imported components
import Pagination from "@components/Pagination";
import Header from "@components/Header";
import Detail from "@components/Detail";
import Question_1 from "@components/Question_1";
import Question_2 from "@components/Question_2";
import Question_3 from "@components/Question_3";
import Question_4 from "@components/Question_4";
import Question_5 from "@components/Question_5";
import Question_6 from "@components/Question_6";
import Question_7 from "@components/Question_7";
import Question_8 from "@components/Question_8";

// ? imported css
import "@assets/css/Home.css";

function Home() {
	const [currentPage, setCurrentPage] = useState(1);
	const lastPage = 8;

	const questionPages: { [key: number]: React.ReactElement } = {
		1: <Question_1/>,
		2: <Question_2/>,
		3: <Question_3/>,
		4: <Question_4/>,
		5: <Question_5/>,
		6: <Question_6/>,
		7: <Question_7/>,
		8: <Question_8/>
	}
	
	const getPage = (currentPage: number) => {
		return questionPages[currentPage];
	}

	return (
		<>
			<Container fluid>
				<Header/>
				<Detail/>
				<p className="danger-text">บอกข้อมูลให้ละเอียดมากที่สุดถ้ามี Please provide as much details as possible.</p>
				<p className="danger-text">หมายเหตุ: คำตอบจะไม่หายไปจนกว่าจะกดส่ง เพื่อผลประโยชน์ของตัวผู้สมัครงาน (ยกเว้นคำตอบแบบตัวเลือก)</p>
				{getPage(currentPage)}
				<Pagination
					currentPage={currentPage}
					lastPage={lastPage}
					maxLength={9}
					setCurrentPage={setCurrentPage}
				/>
			</Container>
		</>
	)
}

export default Home;