import './federal-tax.css';

const FederalTax = (props) => {
    return (
        <div className='federalTax'>
            <h3>Total</h3>
            <input 
                id='federalTax' 
                type='text'
                value={props.federalTax}
                readOnly
            /> 
        </div>
    )

}

export default FederalTax 