import { useDispatch, useSelector } from 'react-redux';
import styles from './Filter.module.css';
import { Input } from 'components/common/input/Input';
import { setFilter } from 'components/redux/contactsFilterSlice';
import { selectTerm } from 'components/redux/selectors';

export const Filter = () => {
  const term = useSelector(selectTerm);
  const dispatch = useDispatch();

  return (
    <div className={styles.filter}>
      <Input
        labelName="Find contacts by name"
        onChange={evt => dispatch(setFilter(evt.target.value))}
        name="filter"
        value={term}
      />
    </div>
  );
};
