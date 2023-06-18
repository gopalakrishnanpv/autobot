import { useDrop } from 'react-dnd'
import { ItemType } from './item-type.jsx'
export const Bin = () => {
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: ItemType.BOX,
        drop: () => ({ name: 'Dropzone' }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }))
    const isActive = canDrop && isOver
    return (
        <div ref={drop} data-testid="dropzone"
            className="p-10 text-indigo-600 font-medium border-2 border-dashed border-indigo-600">
            {isActive ? 'Release to drop' : 'Drag a box here'}
        </div>
    )
}
