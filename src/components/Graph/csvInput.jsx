import React, { useState }from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import {toast} from 'react-toastify';

const CsvInput = ({setCsvData, setCsvDataStatus}) => {

    const [CSVRawData, setCSVRawData] = useState();

    const inputChanged = (value) => {
        setCSVRawData(value);
    }

    const submitCSV = (e) => {
        e.preventDefault();
        let splittedByLine = CSVRawData.split(/\r?\n/);
        var momentum = [];
        var definiteArray = [];

        splittedByLine.forEach((lines, i) => {
            let line = lines.split(',');
            momentum[i] = new Array(line);
        });

        momentum.forEach((lines, i) => {
            momentum[i][0].forEach((value, j) => {
                if (i === 0) {
                    definiteArray[j] = new Array(value);
                    definiteArray[j][i] = value;
                } else {
                    if (definiteArray[j] === undefined) {
                        console.log('error')
                        toast.warn('Error with the CSV entered!', {
                            position: toast.POSITION.TOP_CENTER,
                            closeButton: true,
                            autoClose: 5000
                        });
                        setCsvDataStatus(false);
                    } else {
                        definiteArray[j].push(value);
                        setCsvDataStatus(true);
                    }
                }
            })

        });

        if (definiteArray.length < 2) {
            toast.warn('Error with the CSV entered!', {
                position: toast.POSITION.TOP_CENTER,
                closeButton: true,
                autoClose: 5000
            });
            setCsvDataStatus(false);
        } else {
            setCsvData(definiteArray);
        }
    }

    return (
        <InputGroup>
            <InputGroup.Prepend>
            <InputGroup.Text>Enter a CSV file</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
                as="textarea"
                aria-label="Enter a CSV file"
                onChange={(e) => inputChanged(e.target.value)}/>
            <InputGroup.Append>
            <Button variant="outline-secondary" onClick={(e) => {submitCSV(e)}}>Submit CSV</Button>
            </InputGroup.Append>
        </InputGroup>
    )
}

export default CsvInput;