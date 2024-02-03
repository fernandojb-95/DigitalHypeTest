import * as etiquetas from "../constants/etiquetas";
import PropTypes from "prop-types";

const Display = ({result}) => {
	return (
		<div className="result-viewer">
			<h2>{etiquetas.result}</h2>
			<pre className="json-viewer">
				{result}
			</pre>
		</div>
	)	
}

Display.propTypes = {
	result: PropTypes.string
}

export default Display;