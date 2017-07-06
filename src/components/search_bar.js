import React, { Component } from 'react';
import { FormGroup, InputGroup, FormControl, Glyphicon } from 'react-bootstrap';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = { term: '' };
    }

    render() {
        return (
            <div className="search-bar">
                <FormGroup>
                    <InputGroup>
                        <InputGroup.Addon>
                            <Glyphicon glyph="search" />
                        </InputGroup.Addon>
                        <FormControl type="text"
                            value={this.state.term}
                            onChange={event => this.onInputChange(event.target.value)} />
                    </InputGroup>
                </FormGroup>
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

    export default SearchBar;