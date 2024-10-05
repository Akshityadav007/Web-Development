import {atom, selector} from "recoil";

export const todosAtom = atom({
    key : "todoAtom",
    default : [
        {
          "title": "Morning Run",
          "description": "Go for a 5 km run before breakfast.",
          "completed": false
        },
        {
          "title": "Prepare Lunch",
          "description": "Cook a healthy lunch for the day.",
          "completed": true
        },
        {
          "title": "Grocery Shopping",
          "description": "Buy vegetables, fruits, and household items.",
          "completed": false
        },
        {
          "title": "Finish Work Report",
          "description": "Complete the pending quarterly report for work.",
          "completed": true
        },
        {
          "title": "Visit the Dentist",
          "description": "Annual dental check-up at 3 PM.",
          "completed": false
        },
        {
          "title": "Morning Stretch",
          "description": "Stretching routine after the gym session.",
          "completed": true
        },
        {
          "title": "Buy New Gym Shoes",
          "description": "Purchase a pair of shoes suitable for gym workouts.",
          "completed": true
        },
        {
          "title": "Read a Book",
          "description": "Read at least 50 pages of the new novel.",
          "completed": false
        },
        {
          "title": "Gym Workout",
          "description": "Complete the upper body workout at the gym.",
          "completed": false
        },
        {
          "title": "Call Parents",
          "description": "Catch up with parents over the phone in the evening.",
          "completed": true
        },
        {
          "title": "Weekly Budget Review",
          "description": "Review and update the budget for the upcoming week.",
          "completed": false
        },
        {
          "title": "Organize Workspace",
          "description": "Clean and reorganize the home office space.",
          "completed": false
        },
        {
          "title": "Watch Documentary",
          "description": "Watch the new documentary on climate change.",
          "completed": true
        },
        {
          "title": "Gym Nutrition",
          "description": "Plan meals to support gym training sessions.",
          "completed": false
        },
        {
          "title": "Laundry",
          "description": "Wash and fold all laundry for the week.",
          "completed": true
        },
        {
          "title": "Evening Walk",
          "description": "Take a relaxing walk around the neighborhood.",
          "completed": false
        },
        {
          "title": "Practice Meditation",
          "description": "Spend 10 minutes on guided meditation.",
          "completed": true
        },
        {
          "title": "Update Resume",
          "description": "Make updates to the resume with recent projects.",
          "completed": false
        },
        {
          "title": "Movie Night",
          "description": "Watch a movie with friends in the evening.",
          "completed": true
        },
        {
          "title": "Plan Weekend Trip",
          "description": "Research and plan an outing for the weekend.",
          "completed": false
        }
      ]
})

export const filterAtom = atom({
    key: "filterAtom",
    default: ""
})


export const filteredTodos = selector({
    key : "filteredTodos",
    get : (props) => {
        const todos = props.get(todosAtom);
        const filter = props.get(filterAtom);

        if(filter !== "")
            return todos.filter(x => x.title.includes(filter) || x.description.includes(filter));
        else
            return todos;
    }
})