import { Row, Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import "@assets/css/Question.css";
import { eChange } from "@helpers/questionHandle";
import { useEffect, useState } from "react";

function Question_1() {
	const questionNumber = 1;
	
	const [questionState, setQuestionState] = useState<{ [key: string]: any }>({});
	
	const handleChange = (event: eChange) => {
		const target = event?.target;
		const formId = target.id;
		const inputName = target.name;
		const keyName = `${formId}${inputName}`
		const key = `${questionNumber}-${keyName}`;
		const questionLocals = questionState;
		if (target.type != "radio") {
			const value = target.value;
			questionLocals[keyName] = value;
			localStorage.setItem(key, value);
			setQuestionState({...questionState, [keyName]: value});
		} else {
			localStorage.setItem(key, "true");
			setQuestionState({...questionState, [keyName]: true});
		}
	}

	useEffect(() => {
		const questionLocals: { [key: string]: string } = {};
		for (const key in localStorage) {
			const keyQuestion = key.split("-");
			if (keyQuestion[0] == String(questionNumber)) {
				const data = localStorage.getItem(key);
				const keyName = keyQuestion[1];
				questionLocals[keyName] = data || "";
			}
		}
		setQuestionState(questionLocals);
	}, []);

	return (
		<>
			<div className="question-page">
				<h1 className="title">ข้อมูลส่วนตัว PERSONAL DETAILS</h1>
				<Form>
					{/*ข้อแรก*/}
					<Form.Group as={Row} className="mb-3" controlId="formNameThai">
						<Col sm="3">
							<Form.Label className="form-label">ชื่อ<br/>Name in Thai</Form.Label>
						</Col>
						<Col>
							<Form.Control name="Prefix" placeholder="คำนำหน้า"
							onChange={(event) => handleChange(event as eChange)}
							value={questionState.formNameThaiPrefix}
							/>
						</Col>
						<Col>
							<Form.Control name="Name" placeholder="ชื่อ" 
							onChange={(event) => handleChange(event as eChange)}
							value={questionState.formNameThaiName}
							/>
						</Col>
						<Col>
							<Form.Control name="Surname" placeholder="นามสกุล"
							onChange={(event) => handleChange(event as eChange)}
							value={questionState.formNameThaiSurname}
						/>
						</Col>
					</Form.Group>
					<Form.Group as={Row} className="mb-3" controlId="formNameEng">
						<Col>
							<Form.Label className="form-label">ชื่อ<br/>Name in English</Form.Label>
						</Col>
						<Col>
							<Form.Control name="Title" placeholder="Title"
							onChange={(event) => handleChange(event as eChange)}
							value={questionState.formNameEngTitle}
							/>
						</Col>
						<Col>
							<Form.Control name="Name" placeholder="Name"
							onChange={(event) => handleChange(event as eChange)}
							value={questionState.formNameEngName}
							/>
						</Col>
						<Col>
							<Form.Control name="Surname" placeholder="Surname"
							onChange={(event) => handleChange(event as eChange)}
							value={questionState.formNameEngSurname}
							/>
						</Col>
					</Form.Group>
					<Form.Group as={Row} className="mb-3" controlId="formNumber3">
						<Col sm="2">
							<Form.Label>เพศ<br/>Sex</Form.Label>
						</Col>
						<Col className="form-label" sm="4">
							<Form.Check inline label="ชาย Male" id="genderMale" type="radio" name="Gender"
							onChange={(event) => handleChange(event as eChange)}
							value={questionState.genderMaleGender}
							/>
							<Form.Check inline label="หญิง Female" id="genderFemale" type="radio" name="Gender"
							onChange={(event) => handleChange(event as eChange)}
							value={questionState.genderFemaleGender}
							/>
						</Col>
						<Col sm="2">
							<Form.Label>ชื่อเล่น Nickname</Form.Label>
						</Col>
						<Col sm="4">
							<Form.Control placeholder="ชื่อเล่น" name="Nickname"
							onChange={(event) => handleChange(event as eChange)}
							value={questionState.formNumber3Nickname}
							/>
						</Col>
					</Form.Group>
					{/*ข้อสอง*/}
				</Form>
			</div>
		</>
	);
}

export default Question_1;
