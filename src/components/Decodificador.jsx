import { useState } from "react";
import { Modal, Row, Col } from "antd";
import { useForm } from "antd/es/form/Form"; 
import Display from "./Display";
import Instructions from "./Instructions";
import FormDecode from "./Form";
import * as etiquetas from "../constants/etiquetas";
import '../styles/Decodificador.css';

const Decodificador = () => {
	const [error, setError] = useState(false);
	const [result, setResult] =useState("");
	const [form] = useForm();

	const handleSubmit = data => {
		setResult("");
		const splitedArray = data?.encodedString.split(/0+/);
		const decodedArray = splitedArray.filter(e => e !== "")
		if(decodedArray.length !== 3) {
			setError(true);
			return "";
		}
		setError(false);
		let i = 0;
		let res = {};
		for(const e of decodedArray) {
			if(!isNaN(e)) {
				Object.assign(res, { id: e});
				continue;
			}
			if(i === 0) {
				i++
				Object.assign(res, {nombre: e})
				continue;
			}
			Object.assign(res, {apellido: e})
			continue;
		}
		const response = JSON.stringify(res, null, 4);
		setResult(response);
		return response;
	}

	const handleClear = () => {
		form.resetFields();
		setError(false);
		setResult("");
	}

	return (
		<div className="body">
			<section className="main">
			<Row>
				<Col xs={24} sm={24} md={10}>
					<Instructions />
				</Col> 
				<Col xs={24} sm={24} md={14}>
					<div className="form-body">
						<FormDecode handleSubmit={handleSubmit} handleClear={handleClear} form={form} />
					</div>
				</Col>
			</Row>
			</section>
			<section className="result">
				<Display result={result} />
			</section>
			<Modal
				open={error}
				onOk={() => setError(false)}
				okText={etiquetas.acceptButton}
				onCancel={() => setError(false)}
				cancelText={etiquetas.exitButton}
				closeIcon={false}
				maskClosable={false}
			>
				<p>{etiquetas.modalErrorMessage}</p>
			</Modal>
		</div>
	)
}

export default Decodificador