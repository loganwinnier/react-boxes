import { useState } from "react";
import { v4 as uuid } from "uuid";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

/**
 * Box list: manages the colored boxes.
 *
 * State:
 * - boxList: array like [{ id, height, width, backgroundColor }, ...]
 *
 * BoxList -> <NewBoxForm /> [<Box >,...]
 */

function BoxList() {
    const [boxList, setBoxList] = useState([]);

    /**
    * Takes box object like { height, width, backgroundColor }
    * Adds box to boxList state.
    */

    function addBox(box) {
        let newBox = { ...box, id: uuid() };
        setBoxList(boxes => [...boxes, newBox]);
    }

    /**
    * Takes in an id for a box in boxList state.
    * Removes that box and updates state.
    */

    function removeBox(id) {
        const updatedBoxList = boxList.filter(box => box.id !== id);
        setBoxList(updatedBoxList);
    }

    /**
     * Renders an unordered list of Box components.
     */

    function renderItems() {
        return (
            <ul>
                {boxList.map(box => (
                    <li key={box.id}>
                        <Box
                            width={box.width}
                            height={box.height}
                            backgroundColor={box.backgroundColor}
                            removeBox={() => removeBox(box.id)}
                        />
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <div>
            <NewBoxForm addBox={addBox} />
            {renderItems()}
        </div>
    );
}

export default BoxList;