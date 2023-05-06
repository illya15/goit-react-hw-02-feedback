import React from 'react';

import { Component } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions'


 class App extends Component {
state = {
  good: 0,
  neutral: 0,
  bad: 0
}





render() {
  return (
    
  <>
    <Section     title ="Please leav feedback">
 <FeedbackOptions options={['good','neitral', 'bed']}/> 
    
    
   </Section>

   </>
  )
}
 }

 export default App