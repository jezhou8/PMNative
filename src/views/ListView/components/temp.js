<EventHeader />
				<EventFilters isHidden={this.state.isSearchHidden} />
				<ScrollView
					alwaysBounceVertical={true}
					scrollEventThrottle={1}
					onScroll={Animated.event([
						{
							nativeEvent: {
								contentOffset: { y: this.state.scrollY },
							},
						},
					])}
					style={styles.scrollViewContainer}
				>
					<EventList
						expandCard={this.props.expandCard}
						setSelectedEvent={this.props.setSelectedEvent}
						events={this.props.events}
						navigation={this.props.navigation}
					/>
				</ScrollView>