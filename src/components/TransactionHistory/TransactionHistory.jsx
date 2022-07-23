import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';
import capitalFirstLetter from '../../utils/capitalFirstLetter';

export default function TransactionHistory({items}){
    
    return (
    <table className={css.transactionHistory}>
        <thead>
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>
        <tbody>
            {items.map(item => 
            <tr key={item.id}>
                <td>{capitalFirstLetter(item.type)}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
            </tr>)}
        </tbody>
    </table>
    )
};

TransactionHistory.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        currency: PropTypes.bool.isRequired,
      }))
  }