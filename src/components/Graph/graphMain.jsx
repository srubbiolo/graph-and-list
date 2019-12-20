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

    }, [csvDataStatus, csvData, setShowGraph, xAxis, yAxis])

    return (
        <Container>
            <h1>Graph (part 1)</h1>
            <Row>
                <Col>
                    <CsvInput 
                        setCsvData={setCsvData}
                        setCsvDataStatus={setCsvDataStatus}
                    />
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
            <Row className="justify-content-md-center">
                {showGraph && <Graph
                                xAxis={xAxis}
                                yAxis={yAxis}
                                csvData={csvData}
                            />
                }
            </Row>
        </Container>
    )
}

export default GraphMain