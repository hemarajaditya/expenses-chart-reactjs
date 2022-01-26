import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const Expenseitem = (props) => {
    // function clickHandler() {}
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Updated!');
        console.log(title);
    }
    
    return (
        <li>
        <Card className = "expense-item">
            <ExpenseDate date = {props.date}/>
            <div className = "expense-item__description">
                <h2>{title}</h2>
                <div className = "expense-item__price">
                    ${props.amount}
                </div>
            </div>
            
        </Card>
        </li>
    );
}

export default Expenseitem;