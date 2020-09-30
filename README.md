# react-sample-countDown-timer
This a sample count down component using react.</br>

# Installation
npm install react-sample-countDown-timer --save</br>

# Usage
...  
import CountDownTimer from 'react-sample-countdown-timer'</br>
...</br>
const timeOut = (count) => {</br>
    console.log("count",count);</br>
  };</br>
...</br>
<CountDownTimer</br> 
From = {20}</br>
color={'green'}</br>
size ={30}</br>   
dangerView= {false}</br> 
timeOut={timeOut}</br>
/>  

# Options

'From' -  from where number have to decrement - mandatory </br> 
'color' - color to display the timer</br> 
'size' - font size</br>
'dangerView' - true| false (if true it will show single number in red color other wise it will show in given color)</br>
'timeOut' - method for timeout call back
