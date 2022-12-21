import './tax-state.css';

const TaxState = (props) => 
{
    function stateCalculatorSingle(income) {
        let grossIncome = income
        console.log(grossIncome);
    
        let totalTax = 0; 
    
        return totalTax
    
    }

console.log(stateCalculatorSingle(100000));

    return (
        <div className='taxState'>
            <h3>Total</h3>
            <input 
                id='taxState' 
                type='text'
                value={props.TaxState}
                readOnly
            /> 
        </div>
    )

}

export default TaxState 

