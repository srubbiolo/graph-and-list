import React, { useState, useEffect } from 'react';
import CsvInput from './csvInput';
import AxisSelector from './axisSelector';
import Graph from './graph';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const GraphMain = () => {
    const [csvData, setCsvData] = useState();
    const [csvDataStatus, setCsvDataStatus] = useState(false); 
    const [xAxis, setXaxis] = useState(null); 
    const [yAxis, setYaxis] = useState(null);
    const [showGraph, setShowGraph] = useState(false);

    useEffect(() => {

    }, [csvDataStatus, csvData, setShowGraph])

    return (
        <Container>
            <Row>
                <Col>
                    <CsvInput 
                        setCsvData={setCsvData}
                        setCsvDataStatus={setCsvDataStatus}
                    />
                    <h1>{csvData}</h1>
                    <h1>{csvDataStatus}</h1>
                </Col>
                <Col>
                    {csvDataStatus && <AxisSelector 
                                        csvData={csvData}
                                        setXaxis={setXaxis}
                                        setYaxis={setYaxis}
                                        setShowGraph={setShowGraph}
                                        />
                    }
                </Col>
            </Row>
            <Row>
                {showGraph && <Graph/> }
            </Row>
        </Container>
    )
}

export default GraphMain