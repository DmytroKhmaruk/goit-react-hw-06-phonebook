import PropTypes from 'prop-types';
import FilterStyles from './FilterStyles';

function Filter ({ value, handleChangeFilter }) {
  return (
    <>
      <h3>Find contacts by name</h3>
      <FilterStyles
       type="text"
       value={value}
       onChange={handleChangeFilter} />
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  handleChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
