import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import Button from 'react-bootstrap/button';

const AxisSelector = ({csvData, setXaxis, setYaxis, setShowGraph}) => {
    
    const [allOptions, setAllOptions] = useState();
    const [selected] = useState({ value: 'Select', label: 'Select'});
    const [isXSet, setIsXSet] = useState(false);
    const [isYSet, setIsYSet] = useState(false);

    
    useEffect(() => {
        let momentum = [];
        csvData.forEach((option, i) => {
            momentum.push({value: i, label: option[0]})
        })
        setAllOptions(momentum);

    }, [])


    const changedSelection = (selected, axis) => {
        if (axis === 'x') {
            setXaxis(selected.value);
            setIsXSet(true);
        } else {
            setYaxis(selected.value);
            setIsYSet(true);
        }
    }

    const submitAxis = (e) => {
        e.preventDefault();

        if (isXSet && isYSet) {
            setShowGraph(true);
        }
    }

    return (
    <>
        <Select
            defaultValue={selected}
            onChange={(selected) => { changedSelection(selected, 'x') } }
            options={allOptions}
        />
        <Select
            defaultValue={selected}
            onChange={(selected) => { changedSelection(selected, 'y') } }
            options={allOptions}
        />
        <Button variant="outline-secondary" onClick={(e) => {submitAxis(e)}}>Submit CSV</Button>
    </>
    )
}

export default AxisSelector