import { useRecoilValue } from "recoil";

import { todoListStatsState } from "./todoListStateState";

export const TodoListStats = () => {
  const {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted,
  } = useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted);

  return (
    <>
      <h3>Todo Stats</h3>
      <ul className="text-sm mb-4">
        <li>Total items: {totalNum}</li>
        <li>Items completed: {totalCompletedNum}</li>
        <li>Items not completed: {totalUncompletedNum}</li>
        <li>Percent completed: {formattedPercentCompleted}%</li>
      </ul>
    </>
  );
};
