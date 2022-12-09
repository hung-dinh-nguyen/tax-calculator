import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props) {
      super(props); 
      this.state = {
          income: 0;  
      }; 
      this.handleChange = this.handleChange.bind(this);

  }
}


export default App;
