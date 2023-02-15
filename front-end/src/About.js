import { useState, useEffect } from 'react'
import axios from 'axios'


/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */

const About = props => {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState('')
  const [myImage, setImage] = useState('')
  const [myText, setText] = useState('')

  const fetch = () => {
      axios
        .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/about`)
        .then(response => {
          const aboutMe = response.data.txt 
          const img = response.data.img
          setText(aboutMe)
          setImage(img)
        })
        .catch(err => {
          setError(err)
        })
        .finally(() => {
          setLoaded(true)
        })
    }

useEffect(() => {
  fetch()
}, [])

return (
  <>
    <h1>About Me</h1>
    {error && <p className="MessageForm-error">{error}</p>}
    <img src={myImage} alt='' style={{maxHeight:"500px"}}/>
    <p>{myText}</p>
  </>
)
}


// make this component available to be imported into any other file
export default About
