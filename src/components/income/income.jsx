import './income.css'

const Income = (props) => {
    return (
        <div className='income'>
            <h3>Income</h3>
            <input 
                id='incomeInput' 
                type='number'
                onChange={props.onChange}
            /> 
        </div>
    )

}

export default Income 