import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Container from 'react-bootstrap/Container';

const Graph = ({xAxis, yAxis, csvData}) => {
    const [options, setOptions] = useState();
    useEffect(() => {
        //setting vars
        let xTemp, yTemp, xFinal, yFinal, invertFunctionality = false;

        //Pop the first ones (the titles)
        xTemp = [...csvData[xAxis]].splice(1,);
        yTemp = [...csvData[yAxis]].splice(1,);

        //If its a date format, do not convert to integer
        if (xTemp[0].indexOf('-') < 0 && yTemp[0].indexOf('-') < 0)  {
            xFinal = xTemp.map(function (x) { 
                return parseInt(x, 10); 
            });
            yFinal = yTemp.map(function (x) { 
                return parseInt(x, 10); 
            });
        }
        if (xTemp[0].indexOf('-') > 1) {
            xFinal = xTemp;
            yFinal = yTemp.map(function (x) { 
                return parseInt(x, 10); 
            });
        }
        if (yTemp[0].indexOf('-') > 1) {
            xFinal = xTemp.map(function (x) { 
                return parseInt(x, 10); 
            });
            yFinal = yTemp;
            invertFunctionality = true;
        }

        //This is in order to avoid issue, didn't work, if date goes to Y axis it fails. Can't find good documentation for this library.
        if (!invertFunctionality) {
            let options  = {
                title: {text: 'Graph'},
                xAxis: {categories: xFinal},
                series: [{ data: yFinal }],
            };
            setOptions(options);
        } else {
            let options  = {
                title: {text: 'Graph'},
                series: [{ data: yFinal }],
                yAxis: {categories: xFinal},
            };
            setOptions(options);
        }
    }, [xAxis, yAxis, csvData])
    
    return (
    <Container style={{margin: '20px', border: '2px solid black'}}> 
        <HighchartsReact highcharts={Highcharts} options={options}/>
    </Container>
      
    )
}

export default Graph