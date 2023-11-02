
function Box({ width = '10', height = '10', backgroundColor = 'black', removeBox }) {
    const boxStyle = {
        width: `${ width }px`,
        height: `${ height }px`,
        backgroundColor: backgroundColor
    };
    return (
        <div>
            <div style={boxStyle}></div>
            <button onClick={removeBox}>Remove Box</button>
        </div>
    );
}

export default Box;