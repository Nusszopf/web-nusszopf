import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Nuss = forwardRef(({ color = 'currentColor', strokeWidth = 2, size = 24, ...props }, ref) => {
  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 101 101"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path d="m52.821 6.272c-13.787.19-40.708 2.941-40.708 37.615s41.01 49.863 41.01 49.863 41.011-14.525 41.011-51.001c0-36.475-27.526-36.666-41.313-36.477z" />
      <path d="m20.505 18.681s10.59 15.051 26.027 13.883 17.409-5.911 22.838-7.368c5.802-1.558 11.32 3.909 22.339 2.541" />
      <path d="m76.09 45.694s-.801 12.577-15.929 25.929" />
    </svg>
  )
})

Nuss.displayName = 'NussIcon'
Nuss.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.number,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default Nuss
