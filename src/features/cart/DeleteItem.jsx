import Button from '../../Button';
import { deleteItem } from './cartSlice';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  return (
    <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
      Delete
    </Button>
  );
}

DeleteItem.propTypes = {
  pizzaId: PropTypes.string.isRequired,
};

export default DeleteItem;
