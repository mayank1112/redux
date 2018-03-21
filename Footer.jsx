import React from 'react';
import { connect } from "react-redux"; 

const mapStateToProps = (state) => {
	return { 
		articles: state.articles,
		time: state.time,
	};
};

class Footer extends React.Component {

 	render() {
		 return (

			<footer>
				<ul className="list-group list-group-flush">
					{this.props.articles.map(el => (
					<li className="list-group-item">
						{el.name}
					</li>
					))}
					<li> Updated on {this.props.time}</li>
				</ul>
	 </footer>
);
	 }
};

const Footer2 = connect(mapStateToProps)(Footer);

export default Footer2;
