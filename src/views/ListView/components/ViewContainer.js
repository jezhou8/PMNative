import React from "react";
import { Animated, View, FlatList } from "react-native";
import EventHeader from "./Header";
import EventList from "./List";
import EventFilters from "./Filters";

class ViewContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	state = { isSearchHidden: false, offset: 0 };

	handleScroll = event => {
		var currentOffset = event.nativeEvent.contentOffset.y;
		var shouldChange =
			Math.abs(currentOffset - this.state.offset) > 50 ? true : false;

		if (shouldChange) {
			var hidden = currentOffset > this.state.offset ? true : false;
			this.setState({
				isSearchHidden: hidden,
				offset: currentOffset,
			});
		}
	};

	render() {
		return (
			<View style={styles.container}>
				<EventHeader navigation={this.props.navigation} />
				<EventFilters isHidden={this.state.isSearchHidden} />
				<EventList
					expandCard={this.props.expandCard}
					setSelectedEvent={this.props.setSelectedEvent}
					events={this.props.events}
					navigation={this.props.navigation}
					filterEvent={this.props.filterEvent}
				/>
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1,
	},
	scrollViewContainer: {
		backgroundColor: "#fff",
	},
};

export default ViewContainer;
