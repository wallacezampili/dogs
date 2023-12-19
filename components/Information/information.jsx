import './information.css'

function Information({data, text})
{
    return (
        <div className='info'>
            <span>{data}:</span>
            <p>{text}</p>
        </div>
    )
}


export default Information;