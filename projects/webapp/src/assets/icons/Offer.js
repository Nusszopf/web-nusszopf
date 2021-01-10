import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Offer = forwardRef(({ color = 'currentColor', size = 24, ...props }, ref) => {
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
      <path d="m.122.111h24v24h-24z" fill="none" />
      <path d="m12.122.111c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 2.083c5.473 0 9.916 4.444 9.916 9.917s-4.443 9.917-9.916 9.917c-5.474 0-9.917-4.444-9.917-9.917s4.443-9.917 9.917-9.917z" />
      <path d="m15.932 18.403c-.139 0-.229-.07-.271-.209l-.687-2.229c-.028-.055-.063-.083-.104-.083h-5.5c-.042 0-.077.028-.105.083l-.687 2.229c-.042.139-.132.209-.271.209h-2.083c-.084 0-.146-.025-.188-.073-.041-.049-.048-.122-.021-.219l4.521-14.083c.042-.139.132-.209.271-.209h2.604c.139 0 .229.07.271.209l4.542 14.083c.014.028.021.062.021.104 0 .125-.077.188-.23.188zm-6.021-4.542c-.014.083.014.125.084.125h4.229c.083 0 .111-.042.083-.125l-2.146-6.979c-.014-.056-.034-.084-.062-.084s-.049.028-.063.084z" />
    </svg>
  )
})

Offer.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

Offer.displayName = 'Offer'

export default Offer
