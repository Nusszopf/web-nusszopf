import PropTypes from 'prop-types'
import { FiImage } from 'react-icons/fi'

import { Image as CloudinaryImage } from 'cloudinary-react'
import styles from './image.module.scss'

const Image = ({ id, alt, src, className }) => (
  <>
    {id ? (
      <CloudinaryImage
        cloudName={process.env.CLOUDINARY_NAME}
        publicId={id}
        width="300"
        className={className ? `${styles.image} ${className}` : styles.image}
        alt={alt}
      />
    ) : src ? (
      <img
        src={src}
        className={className ? `${styles.image} ${className}` : styles.image}
        alt={alt}
      />
    ) : (
      <div className={className ? `${styles.emptyImage} ${className}` : styles.emptyImage}>
        <FiImage className={styles.icon} />
      </div>
    )}
  </>
)

Image.propTypes = {
  id: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  src: PropTypes.string,
}

export default Image
