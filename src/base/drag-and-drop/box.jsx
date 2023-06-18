import { useDrag } from 'react-dnd'
import { ItemType } from './item-type.jsx'
export const Box = function Box({ name }) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemType.BOX,
        item: { name },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult()
            if (item && dropResult) {
                alert(`You dropped ${item.name} into ${dropResult.name}.`)
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    }))
    return (
        <div ref={drag} data-testid={`box`}
            className="mt-3 p-3 uppercase text-center text-sm bg-indigo-600 rounded hover:bg-indigo-700 shadow-sm shadow-indigo-600 text-white font-medium">
            {name}
        </div>
    )
}
