/**
 * A colored box with height, width, and backgroundColor submitted by user.
 *
 * Props:
 * - width: String representing number of pixels
 * - height: String representing number of pixels
 * - backgroundColor: String representing color of box
 *
 * Box renders itself.
 */

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