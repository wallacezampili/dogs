import './dog.css';
import Information from '../Information/information'
function Dog({img, breed, group, temperament})
{
    return(
        <div className='dog'>
            <div className="img-container">
                <img src={img} alt="Dog"/>
            </div>
            <Information text={breed} data='Breed'/>
            <Information text={group} data='Group'/>
            <Information text={temperament} data='Temperament'/>
        </div>
    )
}

export default Dog;