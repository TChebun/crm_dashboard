import { useState } from "react";
import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { Col, Checkbox, Input, Flex } from "antd";
import CardWrapper from "../../components/CardWrapper/CardWrapper";
import TaskModal from "../../components/TaskModal/TaskModal";
import { getTasks } from "../../store/tasks/tasks";

import "./tasks.scss";

const Tasks = () => {
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.tasks);
  const [taskName, setTaskName] = useState("");
  const [taskStatus, setTaskStatus] = useState(false);
  const [openModal, setOpenModal] = useState("");

  const createTask = () => {
    const task = {
      name: taskName,
      status: taskStatus,
    };

    dispatch(getTasks([...tasks, task]));

    setTaskName("");
    setTaskStatus(false);
  };

  return (
    <CardWrapper>
      {openModal && createPortal(<TaskModal name={openModal} setOpenModal={setOpenModal} />, document.body)}
      <Col span={24}>
        <div className="task-page">
          <div className="task-page__create task-page__item">
            <div className="task-page__box">
              <Checkbox onChange={() => setTaskStatus(!taskStatus)} checked={taskStatus} />
              <Input
                value={taskName}
                onChange={({ target: { value } }) => setTaskName(value)}
                onPressEnter={createTask}
                placeholder="Введите текст..."
              />
            </div>
          </div>
          <Flex vertical gap={"10px"}>
            {tasks.map((el) => (
              <div key={el.name} className="task-page__view task-page__item">
                <Flex justify="space-between" align="center">
                  <div className="task-page__box">
                    <Checkbox checked={el.status} />
                    <button onClick={() => setOpenModal(el.name)} className="task-page__view-name">
                      {el.name}
                    </button>
                  </div>
                </Flex>
              </div>
            ))}
          </Flex>
        </div>
      </Col>
    </CardWrapper>
  );
};

export default Tasks;
