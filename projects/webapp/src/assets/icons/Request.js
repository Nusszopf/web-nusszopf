import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Request = forwardRef(({ color = 'currentColor', size = 24, ...props }, ref) => {
  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill={color}
      clipRule="evenodd"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <clipPath id="a">
        <path clipRule="evenodd" d="m.079.111h24v24h-24z" />
      </clipPath>
      <path d="m.079.111h24v24h-24z" fill="none" />
      <g clipPath="url(#a)">
        <path d="m12.079.111c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm.021 19.458c-1.042 0-1.958-.205-2.75-.614-.792-.41-1.403-.99-1.833-1.74-.431-.75-.646-1.611-.646-2.583v-5.042c0-.986.215-1.851.646-2.594.43-.743 1.041-1.319 1.833-1.729s1.708-.614 2.75-.614c1.028 0 1.934.201 2.719.604.784.403 1.392.951 1.823 1.646.43.694.645 1.479.645 2.354v.166c0 .07-.024.129-.072.177-.049.049-.108.073-.178.073h-1.895c-.07 0-.129-.024-.177-.073-.049-.048-.073-.107-.073-.177v-.104c0-.75-.254-1.368-.761-1.854s-1.184-.729-2.031-.729-1.528.253-2.042.76-.771 1.177-.771 2.011v5.208c0 .833.271 1.504.813 2.01.542.507 1.243.761 2.104.761.833 0 1.49-.219 1.969-.656.479-.438.719-1.039.719-1.802v-1.292c0-.07-.035-.104-.105-.104h-2.562c-.069 0-.128-.025-.177-.073-.049-.049-.073-.108-.073-.177v-1.542c0-.069.024-.128.073-.177s.108-.073.177-.073h4.812c.07 0 .129.024.178.073.048.049.072.108.072.177v2.667c0 1.597-.468 2.84-1.406 3.729-.937.889-2.198 1.333-3.781 1.333z" />
      </g>
    </svg>
  )
})

Request.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

Request.displayName = 'Request'

export default Request
