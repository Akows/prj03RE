import './Buttons.css';

const Buttons = ( { text, type, onClick } ) => {

    const buttonType =  ['write', 'update', 'delete'].includes(type) ? type : 'default';

    return (
        <>
            <div className={[ 'linkbutton', `linkbutton_${buttonType}`].join(' ') } onClick={onClick}>
                {text}
            </div>
        </>
    )
}

Buttons.defaultProps = {
    type: 'default',
};

export default Buttons;