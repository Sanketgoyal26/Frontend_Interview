import './Cell.css';

const Cell = ({ filled, onClick, isDisabled }) => {
    return (
        <button onClick={onClick} disabled={isDisabled} type="button" className={filled ? "cell-activated cell" : "cell"} />
    )
}

export default Cell;
