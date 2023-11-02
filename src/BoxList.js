import { useState } from "react";
import { v4 as uuid } from "uuid";
import Box from "./Box";

function BoxList() {
    const [boxList, setBoxList] = useState([]);

    function addBox(box) {
        let newBox = { ...box, id: uuid() };
        setBoxList(boxes => [...boxes, newBox]);
    }

    return (
        <div>
            {boxList.map(box => (
                <Box
                    width={box.width}
                    height={box.height}
                    backgroundColor={box.backgroundColor}
                    removeBox={() => removeBox(box.id)}
                />))}
        </div>
    );
}