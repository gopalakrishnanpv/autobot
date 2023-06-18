// Let's make <Card text='Write the docs' /> draggable!

import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Bin } from './bin'
import { Box } from './box'

/**
 * Your Component
 */
export default function DragAndDrop(props) {
    return (
        <DndProvider backend={HTML5Backend}>
            <div className='flex flex-col align-center justify-center w-full'>
                <p className="font-medium my-3 ">{props.title}</p>

                <div style={{ overflow: 'hidden', clear: 'both' }}>
                    <Bin />
                </div>
                <div style={{ overflow: 'hidden', clear: 'both' }}
                    className='flex align-center justify-center w-full gap-3'>
                    <Box name="Selenium" id="selenium" />
                    <Box name="C#" id="csharp" />
                </div>
            </div>
        </DndProvider>
    )
}