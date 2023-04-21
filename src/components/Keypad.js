// Code Keypad Component Here

function Keypad (){
    return (
        <div>
            <input 
            type="password" 
            id='password' 
            placeholder='Enter password'
            onChange={e => {
                e.preventDefault();
                console.log('Entering password...')
            }} />
        </div>
    )
}

export default Keypad;