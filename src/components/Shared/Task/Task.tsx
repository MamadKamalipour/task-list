import { useBaseComponent } from '@base/BaseComponent'
import { Draggable } from 'react-beautiful-dnd'
import { CloseIcon } from '../Icons/CloseIcon'
import { useTaskHelper } from './TaskHelper'
import { StyledCheckBoxInput, StyledNameInput, StyledRemoveButton, StyledTaskWrapper } from './TaskStyle'
import { ITaskProps, ITaskState } from './TaskType'

export const Task = (props: ITaskProps) => {
    const { helper } = useBaseComponent<ITaskProps, ITaskState, ReturnType<typeof useTaskHelper>>({
        props,
        helperHook: useTaskHelper
    })
    const { task, index } = props
    const { id, isCompleted, title } = task
    const { } = helper
    return (
        <Draggable draggableId={id} index={index}>
            {(provided, snapshot) => (
                <StyledTaskWrapper
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    isDragging={snapshot.isDragging}>
                    <StyledCheckBoxInput type="checkbox" />
                    <StyledNameInput type="text" value={title} />
                    <StyledRemoveButton>
                        <CloseIcon />
                    </StyledRemoveButton>
                </StyledTaskWrapper>
            )}
        </Draggable>
    )
}
