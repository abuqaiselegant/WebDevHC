const exprees = require("express");


const users = [{
    id: 1,  //uniqueness constraint
    username: "Alina",
    password: "alinachintu123"
},
{
    id:2,  //uniqueness constraint
    username: "Monazza",
    password: "minu123"
},
{
    id:3,  //uniqueness constraint
    username: "Insha",
    password: "pp123"
},
];

const organizations = [{
    organizationId: 1, //uniqueness constraint
    title:"100xdevs",
    desctipiton:"Learning coding platform",
    members:1,
    admins:[2],
}, {
    organizationId: 2, //uniqueness constraint
    title:"raman org",
    desctipiton:"Experimenting",
    members:1,
    admins:[],
}];

const boards = [{
    id: 1,
    title:"",
    organizationId: 1,
}];

const issues = [{
    id: 1,
    title:"Add dark mode",
    boardId: 1,
}, {
    id:2,
    title:"Allow admins to create boards",
    boardId: 1,
}];



const app = express();
app.listen(3000);