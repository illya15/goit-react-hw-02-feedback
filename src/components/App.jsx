import React from 'react';

import { Component } from 'react';

import Statistics from './Statistics/Statistics'
// import Section from './Section';
// import FeedbackOptions from './FeedbackOptions'


 class App extends Component {
   state = {
     good: 0,
     neutral: 0,
     bad: 0,
   };

   goooIncrement = () => {
    this.setState(prevState => ({
      good: prevState.good + 1
    }))
   };

   neutralIncrement = () => {
     this.setState(prevState => ({
       neutral: prevState.neutral + 1,
     }));
   };

   badIncrement = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
   };

   countTotalFeedback = (state) => {
    return state.good + state.neutral + state.bad 
    
   }

   countPositiveFeedbackPercentage = (state) => {
  return Math.floor((state.good/(state.good + state.neutral + state.bad ))*100)
   };


   render() {
     return (
       <>
         {/* <Section     title ="Please leav feedback">
 <FeedbackOptions options={['good','neitral', 'bed']}/>  
   </Section> */}
         <div>
           <h2>Please Leave feedback</h2>
           <button type="button" onClick={this.goooIncrement}>
             good
           </button>
           <button type="button" onClick={this.neutralIncrement}>
             neutral
           </button>
           <button type="button" onClick={this.badIncrement}>
             bad
           </button>
         </div>

         <Statistics
           good={this.state.good}
           neutral={this.state.neutral}
           bad={this.state.bad}
           total={this.countTotalFeedback(this.state)}
           positivePercentage={this.countPositiveFeedbackPercentage(this.state)}
         ></Statistics>

         {/* <div>
           <h2>Statistics</h2>

           <span>good:{this.state.good} </span>
           <span>neutral:{this.state.neutral} </span>
           <span>bad:{this.state.bad} </span>

           <span>total:{this.countTotalFeedback(this.state)} </span>

           <span>Positive feedback:{this.countPositiveFeedbackPercentage(this.state)} %</span>
         </div> */}
       </>
     );
   }
 }

 export default App