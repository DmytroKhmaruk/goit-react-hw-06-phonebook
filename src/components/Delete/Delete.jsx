import PropTypes from 'prop-types';
import { MdDeleteForever } from 'react-icons/md';
import DeleteStyles from './DeleteStyles'

const Delete = ({ id, name, number, onRemoveContact }) => {
   const contactId = id || '';
    return(
        <DeleteStyles key={contactId}>
            <p>
              {name}: {number}
            </p>
        <button type='button' onClick={() => onRemoveContact(contactId)}>
          <MdDeleteForever/>
        </button>
          </DeleteStyles>
    )
}

Delete.propTypes={
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onRemoveContact: PropTypes.func.isRequired
}

export default Delete