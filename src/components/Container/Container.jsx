import PropTypes from 'prop-types';
import ContainerStyles from './ContainerStyles';

function Container({ children, ...restProps }) {
  return <ContainerStyles {...restProps}>{children}</ContainerStyles>;
}

export default Container;

Container.propTypes = {
  children: PropTypes.node,
};

