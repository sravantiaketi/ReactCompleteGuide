import React from 'react';


const cockpit = (props) => {
    const classes =[];
    const style = {
        backgroundColor: 'green',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        ':hover': {
          backgroundColor : 'lightgreen',
          color: 'black'
        }
      };
     if(props.persons.length <=2) {
       classes.push('red');
     }

     if(props.persons.length <=1) {
       classes.push('bold');
     }

    return (  
    <div>
    <h1>{props.title}</h1>
    <p className={classes.join(' ')}>This is really working!</p>
    <button
      style={style}
      onClick={props.clicked}>Toggle Persons</button>
    </div>
    );
};
export default cockpit;