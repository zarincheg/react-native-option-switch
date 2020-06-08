import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';

class OptionSwitch extends React.PureComponent {
	static propTypes = {
		options: PropTypes.arrayOf(PropTypes.shape({
			key: PropTypes.string,
			label: PropTypes.string,
			value: PropTypes.any,
			isDefault: PropTypes.bool,
		})).isRequired,
		onChange: PropTypes.func,
		styles: PropTypes.object,
		isNullable: PropTypes.bool,
	}

	state = {
		selectedOption: null,
		value: null,
	}

	styles = {
		item: {
			width: 125,
			height: 24,
			borderRadius: 12,
			marginHorizontal: 16,
			alignItems: 'center',
		},
		selectedItem: {
			width: 125,
			height: 24,
			borderRadius: 12,
			marginHorizontal: 16,
			backgroundColor: '#FDE08C',
			alignItems: 'center',

		},
		label: {
			lineHeight: 24,
			fontSize: 14,
			fontFamily: 'Rubik-Regular',
			textTransform: 'uppercase',
		},
		container: {
			flexDirection: 'row',
			alignItems: 'center',
			alignSelf: 'center'
		}
	}

	constructor(props) {
		super(props);

		this.state.selectedOption = props.default || null;
		this.options = props.options;

		this.options = this.options.map((option) => {
			option.key = Math.random().toString(16).substring(2);

			return option;
		});

		this.state.value = this.options.find((option) => option.isDefault).value || null;
		this.state.selectedOption = this.options.find((option) => option.isDefault).key || null;

		if (props.styles) {
			this.styles = {...this.styles, ...props.styles};
		}
	}

	onChange = (option) => {
		let newState = {
			value: option.value,
			selectedOption: option.key
		};

		if (this.state.selectedOption === option.key && this.props.isNullable) {
			newState = {
				value: null,
				selectedOption: null
			};
		}

		this.setState(newState);

		if (this.props.onChange) {
			this.props.onChange(newState.value);
		}
	}

	items = (options) => {
		if (!options) {
			return null;
		}

		return options.map((option) => {
			return (
				<TouchableWithoutFeedback onPress={() => this.onChange(option)} key={option.key}>
					<View style={option.key === this.state.selectedOption ? this.styles.selectedItem : this.styles.item}>
						<Text style={this.styles.label}>{option.label}</Text>
					</View>
				</TouchableWithoutFeedback>
			);
		});
	}

	render () {
		return <View style={this.styles.container}>
			{ this.items(this.options) }
		</View>;
	}
}

export default OptionSwitch;
