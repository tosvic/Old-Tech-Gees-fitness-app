import React from 'react';

const ExerciseCard = ({ exercise, completed, onCompletion }) => {
  const handleMarkComplete = () => {
    onCompletion(exercise);
  };

  return (
    <div className="flex justify-between items-center mb-4 px-4 py-2 rounded-md shadow-sm hover:bg-gray-200">
      <div>
        <h4 className="text-base font-medium">{exercise.name}</h4>
        {exercise.duration && <p className="text-sm text-gray-500">Duration: {exercise.duration} minutes</p>}
        {exercise.sets && exercise.reps && (
          <p className="text-sm text-gray-500">
            Sets: {exercise.sets}, Reps: {exercise.reps}
          </p>
        )}
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          id={`exercise-${exercise.name}`}
          checked={completed}
          onChange={handleMarkComplete}
          className="mr-2 w-4 h-4 rounded focus:ring-0 focus:outline-none"
        />
        <label htmlFor={`exercise-${exercise.name}`} className="text-sm text-gray-700">
          Completed
        </label>
      </div>
    </div>
  );
};

export default ExerciseCard;
