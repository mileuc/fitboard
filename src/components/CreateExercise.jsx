import React, { useState, useEffect } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function CreateExercise(props) {
    const [exercise, setExercise] = useState({
        username: "",
        description: "", 
        duration: 0, 
        date: new Date(),
        users: []
    });

    useEffect(() => {
      setExercise({
        users: ["test user"],
        username: "test user",
      });
    }, []);

    function handleChange(event) {
        const {name, value} = event.target;

        setExercise(prevExercise => {
            return {
                ...prevExercise,
                [name]: value
            };
        });
    }

    function submitExercise(event){
        props.onAdd(exercise);
        setExercise({
            username: "",
            description: "", 
            duration: 0, 
            date: new Date()
        });
        event.preventDefault();
        window.location = "/";
    }



    return (
        <div>
          <h3>Create New Exercise Log</h3>
          <form onSubmit={submitExercise}>
            <div className="form-group">
              <label>Username: </label>
              <select
                ref="userInput"
                required
                className="form-control"
                value={exercise.username}
                onChange={handleChange}
              >
                {exercise.users.map(function (user) {
                  return (
                    <option key={user} value={user}>
                      {user}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="form-group">
              <label>Description: </label>
              <input
                type="text"
                required
                className="form-control"
                value={exercise.description}
                onChange={exercise.onChangeDescription}
              />
            </div>
            <div className="form-group">
              <label>Duration (in minutes): </label>
              <input
                type="text"
                className="form-control"
                value={exercise.duration}
                onChange={exercise.onChangeDuration}
              />
            </div>
            <div className="form-group">
              <label>Date: </label>
              <div>
                <DatePicker
                  selected={exercise.date}
                  onChange={exercise.onChangeDate}
                />
              </div>
            </div>
  
            <div className="form-group">
              <input
                type="submit"
                value="Create Exercise Log"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
      );
}

export default CreateExercise;