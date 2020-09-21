import React from 'react';
import { Multiselect } from 'multiselect-react-dropdown';
import './WeaknessDropdown.css';

class WeaknessDropdown extends React.Component {

    state = {
        weaknesses: []
    };

    weaknesses = [
        'Bug',
        'Dragon',
        'Electric',
        'Fighting',
        'Fire',
        'Flying',
        'Ghost',
        'Grass',
        'Ground',
        'Ice',
        'Normal',
        'Poison',
        'Psychic',
        'Rock',
        'Water'
    ]

    onSelect = (selectedList) => {
        this.setState(() => {
            return { weaknesses: [...selectedList] }
        }, this.props.selectWeaknesses(selectedList))
    }

    onRemove = (selectedList) => {
        this.setState(() => {
            return { weaknesses: [...selectedList]}
        }, this.props.selectWeaknesses(selectedList))
    }

    render() {
        return (
            <Multiselect
                options={this.weaknesses} // Options to display in the dropdown
                onSelect={(event) => this.onSelect(event)} // Function will trigger on select event
                onRemove={(event) => this.onRemove(event)} // Function will trigger on select event
                displayValue="types" // Property name to display in the dropdown options
                isObject={false}
                placeholder='By Weakness'
            />
        )
    }
}

export default WeaknessDropdown;