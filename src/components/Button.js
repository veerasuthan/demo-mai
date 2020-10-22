import React from 'react';

function Button(props) {
    const { text, arrow, ...rest } = props
    return (
        <button {...rest}>
            {
                arrow === 'left' && (
                    <span className='btn-icon left'><img src={require('../assets/arrow_right.svg')} /></span>
                )
            }
            {text}
            {
                arrow === 'right' && (
                    <span className='btn-icon right'><img src={require('../assets/arrow_right.svg')} /></span>
                )
            }
        </button>
    )
}

Button.defaultProps = {
    text: 'Button Text',
    arrow: null
}

export default Button;