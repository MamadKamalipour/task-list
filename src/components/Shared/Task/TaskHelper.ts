import { ICommonHelperParams } from '@base/BaseInterface';
import { updateTask } from '@redux/slices/tasks/tasksSlice';
import { ITaskProps, ITaskState } from './TaskType';

export const useTaskHelper = (
  params: ICommonHelperParams<ITaskProps, ITaskState>,
) => {
  const { dispatch } = params;

  const changeTaskNameHandler = ({
    id,
    title,
  }: {
    title: string;
    id: string;
  }) => {
    dispatch(updateTask({ id, title }));
  };
  const changeTaskCheckedHandler = ({
    id,
    checked,
  }: {
    checked: boolean;
    id: string;
  }) => {
    dispatch(updateTask({ id, isCompleted: checked }));
  };

  return { changeTaskNameHandler, changeTaskCheckedHandler };
};
