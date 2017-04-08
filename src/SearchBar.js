import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props){
        super(props);
        this.handleInStockInput = this.handleInStockInput.bind(this);
        this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
    }    

    handleInStockInput(e){
        this.props.onInStockInput(e.target.checked);
    }

    handleFilterTextInputChange(e){
        this.props.onFilterTextInput(e.target.value);
    }

	render(){
        return(<div>
            <form>
                <label>Nombre producto</label>
                <input type="text" value={this.props.filterText} onChange={this.handleFilterTextInputChange} />
                <p/>
                <label>Stock</label>
                <input type="checkbox" value={this.props.inStockOnly} onChange={this.handleInStockInput} />
            </form>
            </div>
        );
    }
}