import './Image.css'
import image from '../../assets/img/foto.jpg'

const Image = () => {
  return (
      <section className='image-container'>
    <img src={image} alt="Johann Arty"  className="image"/>
    </section>
  )
}

export default Image