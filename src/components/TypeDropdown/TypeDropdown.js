import React from 'react';
import { Multiselect } from 'multiselect-react-dropdown';
import './TypeDropdown.css';

class TypeDropdown extends React.Component {

    state = {
        types: []
    };

    types = [
        'Bug',
        'Dark',
        'Dragon',
        'Electric',
        'Fairy',
        'Fighting',
        'Fire',
        'Flying',
        'Ghost',
        'Grass',
        'Ground',
        'Ke',
        'Normal',
        'Psychic',
        'Poison',
        'Rock',
        'Steel',
        'Water'
    ]

    onSelect = (selectedList) => {
        this.setState(() => {
            return { types: [...selectedList] }
        }, this.props.selectTypes(selectedList))
    }

    onRemove = (selectedList) => {
        this.setState(() => {
            return { types: [...selectedList]}
        }, this.props.selectTypes(selectedList))
    }

    render() {
        return (
            <Multiselect
                options={this.types} // Options to display in the dropdown
                onSelect={(event) => this.onSelect(event)} // Function will trigger on select event
                onRemove={(event) => this.onRemove(event)} // Function will trigger on select event
                displayValue="types" // Property name to display in the dropdown options
                isObject={false}
                placeholder='By Type'
            />
        )
    }
}

export default TypeDropdown;