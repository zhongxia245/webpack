import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import monent from 'moment'

class Demo extends Component {
  render() {
    return (
      <div>
        <h2> Hello React!</h2>
      </div>
    );
  }
}

setInterval(function() {
  document.getElementById('time').innerHTML = moment().format('YYYY-MM-DD HH:mm:ss')
}, 1000)


ReactDOM.render(<Demo />, document.body.appendChild(document.createElement('div')))


