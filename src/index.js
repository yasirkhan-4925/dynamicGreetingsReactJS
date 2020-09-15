import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let currentHour= new Date();

currentHour=currentHour.getHours();

let greetings;
const cssGreetings={};

if(currentHour>=12 && currentHour <=16)
{
   greetings="Good Afternoon"
   cssGreetings.color="yellow";
}
else if(currentHour>=5 && currentHour<12)
{
   greetings="Good Morning"
   cssGreetings.color="green"
}
else{
   greetings="Good Night"
   cssGreetings.color="black"
}

ReactDOM.render(
  <>

   
  <div>
  
<h1> Hey ! <span style={cssGreetings}> {greetings} </span></h1>
</div>
    </>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
