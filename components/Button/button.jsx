import './button.css';

function Button({text, handleClick})
{
    return(
        
        <button className='btn' onClick={handleClick}>
            {text}
        </button>
        
    )
}

export default Button;