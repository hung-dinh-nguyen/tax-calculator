import './App.css';
import FederalTax from './components/federal-tax/federal-tax';
import Income from './components/income/income';

class App extends React.Component{
  constructor(props) {
      super(props); 
      this.state = {
        income: 0;  
        federalTax: 0;
      }; 
      this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      income: e.target.value
    }); 
    console.log(this.state.income)
  }

}


export default App;


