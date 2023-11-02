/**
 * A colored box with height, width, and backgroundColor submitted by user.
 *
 * Props:
 * - width: String representing number of pixels
 * - height: String representing number of pixels
 * - backgroundColor: String representing color of box
 * - removeBox: Callback for removing box from parent state.
 *
 * Box renders itself.
 */


function Box(
    {
        id,
        width = '10',
        height = '10',
        backgroundColor = 'black',
        removeBox
    }) {

    const boxStyle = {
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: backgroundColor
    };
    return (
        <div className="Box">
            <div style={boxStyle}></div>
            <button onClick={() => removeBox(id)}>Remove Box</button>
        </div>
    );
}

export default Box;