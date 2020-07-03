import PropTypes from 'prop-types'

const List = props => {
  return <>{props.type === 'number' ? <ol>{props.children}</ol> : <ul>{props.children}</ul>}</>
}

List.propTypes = {
  type: PropTypes.string,
  children: PropTypes.array,
}

export default List
