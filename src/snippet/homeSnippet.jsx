import React, { Component } from 'react';


class Home extends Component {
    state={
        imgurl:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Public_health_icon_-_Noun_Project_6435.svg/800px-Public_health_icon_-_Noun_Project_6435.svg.png"
    };
  
    render() { 
        
        return(
        <>
            
           <h2>HealthyLife Pvt Ltd.</h2>
            <h3>(Mumbai, India)</h3>
            <p>
              <b>A single platform for all the medical records and interactions between Hospitals, Healthcare individuals, Pathology labs and Patients. </b>
            </p>
           
            <button onClick={this.rendras()} >About Us</button>       
        </>  )   ;
    };
    rendras=()=> {
        return <span>"this string here"</span> ;
    };
}


export default Home;