import classnames from 'classnames'

export const RouterBorder = {
  small: 'small',
  medium: 'medium',
  large: 'large',
}

export const RouteColor = {
  blue200: active => classnames('text-blue-200', { 'border-blue-200': active, 'hover:border-blue-200': !active }),
  yellow300: active =>
    classnames('text-yellow-300', { 'border-yellow-300': active, 'hover:border-yellow-300': !active }),
  gray700: active => classnames('text-gray-700', { 'border-gray-700': active, 'hover:border-gray-700': !active }),
  turquoise400: active =>
    classnames('text-turquoise-400', { 'border-turquoise-400': active, 'hover:border-turquoise-400': !active }),
}
