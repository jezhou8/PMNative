import React from "react";
import VisibleMap from "./containers/ConnectToStore";
class LinksScreen extends React.Component {
	static navigationOptions = {
		header: null,
	};

	render() {
		return <VisibleMap />;
	}
}

export default LinksScreen;
