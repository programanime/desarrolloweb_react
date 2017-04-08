import React, { Component } from 'react';

export default class ProductRow extends Component {
	render() {
        var name = this.props.product.stocked ? this.props.product.name : <span style={{color:'red'}}>{this.props.product.name}</span>;
		var price = this.props.product.price;
		return(
				<tr>
                    <td>{name}</td>
					<td>{price}</td>
				</tr>
			);
	}
}