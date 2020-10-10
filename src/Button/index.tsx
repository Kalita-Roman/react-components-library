import React, { MouseEventHandler } from 'react';

const Button = ({ onClick }: {onClick: MouseEventHandler<any>}) => {
    return <button onClick={onClick}>Click me!</button>
};

export default Button;