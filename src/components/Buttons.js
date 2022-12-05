import './Buttons.css';

const Buttons = ( { text, type } ) => {

    const buttonType =  ['positive', 'negative'].includes(type) ? type : 'default';

    return (
        <>
            <div className={[ 'linkbutton', `linkbutton_${buttonType}`].join(' ') }>
                {text}
            </div>
        </>
    )
}

Buttons.defaultProps = {
    type: 'default',
};

export default Buttons;