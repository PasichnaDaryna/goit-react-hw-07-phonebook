import "../Filter/Filter.css";

import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../redux/contacts/contacts-selectors";
import * as ContactOperations from "../../redux/contacts/contacts-actions";

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={(e) =>
          dispatch(ContactOperations.changeFilter(e.currentTarget.value))
        }
      />
    </label>
  );
};

// const mapStateToProps = state => (
//   {
//     value: state.contacts.filter,
//   });

export default Filter;
