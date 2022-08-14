import {Link} from 'react-router-dom';
import './button.css';
const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn==large'];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonSize : STYLES[0];
    const checkbuttonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    return(
        <Link to='/sign-up' className='btn--mobile'>
            <button
                className={`btn ${checkButtonStyle} ${checkbuttonSize}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
    )
}