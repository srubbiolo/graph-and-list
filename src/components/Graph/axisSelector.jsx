import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import Button from 'react-bootstrap/button';
import { toast } from 'react-toastify';

const AxisSelector = ({csvData, setXaxis, setYaxis, setShowGraph}) => {
    
    const [allOptions, setAllOptions] = useState();
    const [selectX] = useState({ value: 'Select X axis', label: 'Select X axis'});
    const [selectY] = useState({ value: 'Select X axis', label: 'Select Y axis'});
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
        } else {
            toast.error('Error, one of the two axis was not selected!', {
                position: toast.POSITION.TOP_CENTER,
                closeButton: true,
                autoClose: 5000
            });
        }
    }

    return (
    <>
        <Select
            defaultValue={selectX}
            onChange={(selected) => { changedSelection(selected, 'x') } }
            options={allOptions}
        />
        <hr />
        <Select
            defaultValue={selectY}
            onChange={(selected) => { changedSelection(selected, 'y') } }
            options={allOptions}
        />
        <Button className="col-md-12 col-md-offset-3" style={{marginTop: '10px'}} variant="outline-secondary" onClick={(e) => {submitAxis(e)}}>Show Graph!</Button>
    </>
    )
}

export default AxisSelector