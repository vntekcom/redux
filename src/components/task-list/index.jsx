import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskItem from '../task-item'

class TaskList extends Component {

    renderTaskItem = () => {
        return this.props.taskList.map((task,i)=>{
            return <TaskItem task={task} key={i} />
        })
    }

    render() {
        return (
            <div className="col-md-9 px-0">
                <div className="container-fluid px-0">
                    <div className="row header header--right d-flex align-items-center mx-0">
                        <div className="col-md-6">
                            <div className=" d-flex justify-content-between">
                                <h3 className="text-left ml-2 ">
                                    Danh sách công việc
                </h3>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group text-left my-0">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Tìm kiếm công việc"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-3">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th className="text-center">STT</th>
                                <th className="text-center">Công việc</th>
                                <th className="text-center">Độ ưu tiên</th>
                                <th className="text-center">Tình trạng</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.renderTaskItem() }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

// Load data form Store
const mapStateToProps = (state) => {
    return {
        taskList: state.taskArr
    }
}

export default connect(mapStateToProps,null)(TaskList)