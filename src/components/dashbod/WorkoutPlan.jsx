import React from 'react';
import { ExerciseCard } from './ExerciseCard';

const WorkoutPlan = ({ exercises, onExerciseCompletion, completedExercises }) => {
  return (
    <div className="bg-gray-100 rounded-md shadow-md p-4">
      <h3 className="text-lg font-medium mb-4">Workout Plan</h3>
      {exercises.map((exercise) => (
        <ExerciseCard
          key={exercise.name}
          exercise={exercise}
          completed={completedExercises.some((completed) => completed.name === exercise.name)}
          onCompletion={onExerciseCompletion}
        />
      ))}
    </div>
  );
};

export default WorkoutPlan;
