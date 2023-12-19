import { useEffect, useState } from 'react'
import './App.css'
import Dog from '../components/Dog/dog'
import Button from '../components/Button/button'
import Loader from '../components/Loader/loader'
function App() {
  

  const [dog, setDog] = useState({})
  const [loading, setLoading] = useState(false)
  
  async function getData()
  {
    setLoading(false);
    let url = "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1"

    const data = await fetch(url, {
      method: 'GET',
      headers: {  
          'Content-Type': 'application/json',
          'x-api-key': 'live_AERMHu9rK4YwQO89gWJlRycm1YyrgEVgaZVxKXLX3VhlA3hLbYv40c0qfeo9SxLG'
      }
    }).then(response => response.json()).catch(err => console.log(err));

    setDog(data[0]);
    setLoading(true);
  }


  useEffect(() => {
    getData()
  }, [])

  return (
    
    <div className='container'>
      {loading ? 
      (
        <>
          <Dog breed={dog.breeds[0].name} temperament={dog.breeds[0].temperament} img={dog.url} group={dog.breeds[0].breed_group}/>
          <Button text='Get Dog' handleClick={getData}/>
        </>
      ) : (<Loader/>)
      }
      
    </div>
  )
}

export default App
