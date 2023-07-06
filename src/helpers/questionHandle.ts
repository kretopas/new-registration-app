import React from "react";

export type eChange = React.ChangeEvent<HTMLInputElement>;

export function handleChange(event: eChange, questionNumber: number) {
	const target = event?.target;
	const formId = target.id;
	const inputName = target.name;
	const value = target.value;
	const keyName = `${questionNumber}-${formId}${inputName}`;
	console.log("I TRY SO HARD")
	localStorage.setItem(keyName, value);
}