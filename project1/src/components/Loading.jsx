import React, { Component } from 'react';
import loading from './load.gif'

// // racf ==>react arrow component function ==> TAB  
//state kullanmayacağın zaman  için function kullanabilirsin
class Loading extends Component {
    render() {
        return (
            <React.Fragment>
        <img src={loading} alt="loading ..." style={{width:'180px',display:'block',margin:'auto'}}/>
    </React.Fragment>
        );
    }
}

export default Loading;
