import { nanoid } from "nanoid";

export const myProjects = [
    {
        name: 'ProTaskMate',
        description : 'A Full Stack Task Management Web app that uses the kanban methodology to manage tasks. Built using Reactjs bundled with Typescript and Firebase for the hosting, Realtime-database and User Authentication',
        url: 'https://protaskmate.web.app',
        github: 'https://github.com/Ay7ot/protaskmate',
        img: 'protaskmate.png',
        id: nanoid(),
        technologies: [
            'Typescript',
            'ReactJS',
            'TailwindCSS',
            'Firebase'
        ]
    },
    {
        name: 'Musica',
        description : 'A fully responsive music web App with Play, prev, pause, next and other functionalities',
        url: 'https://spandor-musica.netlify.app',
        github: 'https://github.com/Ay7ot/musica/tree/master',
        img: 'spandor-musica.png',
        id: nanoid(),
        technologies: [
            'Javascript',
            'ReactJS',
            'TailwindCSS',
            'Free Web Api'
        ]
    },
    {
        name: "Spandor's Trivia",
        description : 'A fully responsive, highly educational and Fun quiz app with different sections to choose from',
        url: 'https://spandors-trivia.netlify.app',
        github: 'https://github.com/Ay7ot/spandors-trivia/tree/master',
        img: 'spandors-trivia.png',
        id: nanoid(),
        technologies: [
            'JavaScript',
            'ReactJS',
            'Vanilla CSS',
        ]
    },
    {
        name: "Spandor's Tenzie",
        description : 'A fully responsive and fun Tenzie game which also shows your best time gotten',
        url: 'https://spandors-tenzie.netlify.app',
        github: 'https://github.com/Ay7ot/Tenzie/tree/master',
        img: 'spandors-tenzie.png',
        id: nanoid(),
        technologies: [
            'JavaScript',
            'ReactJS',
            'Vanilla CSS',
        ]
    },
    {
        name: 'Food Ways',
        description : 'A full Website UI for a food delivery Company "Food Ways"',
        url: 'https://food-ways.netlify.app',
        github: 'https://github.com/Ay7ot/Food-Ways/tree/master',
        img: 'food-ways.png',
        id: nanoid(),
        technologies: [
            'JavaScript',
            'ReactJS',
            'Vanilla CSS',
        ]
    },
    {
        name: 'Tick Tasks',
        description : 'A Todo web App with ability to add, remove, delete and save tasks to be done with realtime database and user authentication',
        url: 'https://tick-tasks.netlify.app',
        github: 'https://github.com/firebase-database',
        img: 'tickTasks.png',
        id: nanoid(),
        technologies: [
            'JavaScript',
            'ReactJS',
            'Vanilla CSS',
        ]
    },
]