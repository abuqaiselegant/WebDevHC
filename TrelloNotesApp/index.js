const users = [{
    id: 1,  //uniueness constraint
    username: "Alina",
    password: "alinachintu123"
},
{
    id:2,  //uniueness constraint
    username: "Monazza",
    password: "minu123"
}];
const organizations = [{
    organizationId: 1, //uniqueness constraint
    title:"",
    desctipiton:"",
    members:[],
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



