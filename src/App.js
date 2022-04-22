import './App.css';
import React from 'react';
import PicTab from './PicTab'

class App extends React.Component{
  render() {
    return (
      <div className='App'>
        <PicTab picJSON={{
          imgUrl: ['./1.jpeg','./2.jpeg','./3.jpeg','./4.jpeg','./5.jpeg','./6.jpeg','./7.jpeg','./8.jpeg'],
          text: [
            '娘口三三一',
            '娘口三三二',
            '娘口三三三',
            '娘口三三四',
            '娘口三三五',
            '娘口三三六',
            '娘口三三七',
            '娘口三三八',
          ],
          bText: [
            '我就是详细介绍一',
            '我就是详细介绍二',
            '我就是详细介绍三',
            '我就是详细介绍四',
            '我就是详细介绍五',
          ]
        }}/>
      </div>
    );
  }
}

export default App;
