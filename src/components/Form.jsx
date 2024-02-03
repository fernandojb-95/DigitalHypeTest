import { Input, Button, Form } from "antd";
import PropTypes from "prop-types";
import * as etiquetas from "../constants/etiquetas";
import { STRING_VALIDATION } from "../constants/constants";

const FormDecode = ({handleSubmit, handleClear, form}) => {
	return (
		<Form layout="vertical" onFinish={handleSubmit} form={form}>
			<Form.Item
			name="encodedString"
			label={etiquetas.inputLabel}
			rules={[
				{required: true, message: "Debes ingresar la cadena"},
				{pattern: STRING_VALIDATION, message: "La cadena tiene caractéres especiales" }]}
			>
				<Input />
			</Form.Item>
			<Form.Item>
				<div className="form-button-container">
					<Button type="primary" htmlType="submit">{etiquetas.sendButton}</Button>
					<Button type="default" onClick={handleClear}>{etiquetas.cleanButton}</Button>
				</div>
			</Form.Item>
		</Form>
	)
}

FormDecode.propTypes = {
	handleSubmit: PropTypes.func,
	handleClear: PropTypes.func,
	form: PropTypes.object
}

export default FormDecode;