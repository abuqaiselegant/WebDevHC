// conver this callback based function to return a promise
function fetchUser(id, callback) {
    setTimeout(() => {
      callback(null, { id: id, name: 'John' });
    }, 1000);
  }
  
  // Current usage:
  fetchUser(1, (err, user) => {
    console.log(user);
  });
  
//   solution 1
  // TODO: Convert to Promise and use .then()

  function fetchUserProm(id){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({id:id, name:'John'});
        },1000);
    })
  }

  fetchUserProm(1).then(user => console.log(user))
    .catch(err => console.error(err));


// -----------------------------------------------------------------
// Question 2
function divide(a, b, callback) {
  if (b === 0) {
    callback('Cannot divide by zero', null);
  } else {
    callback(null, a / b);
  }
}

// TODO: Make it return a Promise
// Then use it with .then() and .catch()

// solution 2
function divideProm(a,b){
    return new Promise((resolve, reject)=>{
        if(b===0){
            reject('Cannot divide by zero');
        }else{
            resolve(a/b);
        }
    })
}

divideProm(10,2)
.then(result => console.log(result))
.catch(err => console.error(err));

// -----------------------------------------------------------------
// problem 3
function getUser(id, callback) {
    setTimeout(() => callback(null, { id, name: 'Alice' }), 500);
  }
  
  function getOrders(userId, callback) {
    setTimeout(() => callback(null, ['order1', 'order2']), 500);
  }
  
  function getOrderDetails(orderId, callback) {
    setTimeout(() => callback(null, { orderId, price: 100 }), 500);
  }
  
  // Callback Hell:
  getUser(1, (err, user) => {
    getOrders(user.id, (err, orders) => {
      getOrderDetails(orders[0], (err, details) => {
        console.log(details);
      });
    });
  });
  
  // TODO: Rewrite using Promises with .then()

  function getUserProm(id){
    return new Promise((resolve, reject)=>{
        setTimeout(() => resolve({id,name: 'Alice'}),500)
    })
  }

  function getOrdersProm(userId){
    return new Promise((resolve, reject)=>{
        setTimeout(() => resolve(['order1', 'order2']),500)
    })
  }

  function getOrderDetailsProm(orderId){
    return new Promise((resolve, reject)=>{
        setTimeout(() => resolve({orderId, price:100}),500)
    })
  }

  getUser(1)
      .then(user => {return getOrdersProm(user.id);})
      .then(orders => {return getOrderDetailsProm(orders[0]);})
      .then(details => console.log(details))
      .catch(err => console.error(err));


// -----------------------------------------------------------------

// TODO: Write an async function that:
// 1. Gets user by id
// 2. Gets their orders
// 3. Gets details of first order
// 4. Logs the result
// Use try/catch for error handling

// Async/await version (cleanest!)
async function getUserOrderDetails(userId) {
    try {
      console.log('Fetching user...');
      const user = await getUser(userId);
      console.log('Got user:', user);
      
      console.log('Fetching orders...');
      const orders = await getOrders(user.id);
      console.log('Got orders:', orders);
      
      console.log('Fetching order details...');
      const details = await getOrderDetails(orders[0]);
      console.log('Order details:', details);
      
      return details;
      
    } catch (err) {
      console.error('Error:', err);
    }
  }
  
  // Call it
  getUserOrderDetails(1);

// -----------------------------------------------------------------

// problem
function fetchData() {
    return new Promise(resolve => setTimeout(() => resolve('data'), 500));
  }
  
  function processData(data) {
    return new Promise(resolve => setTimeout(() => resolve(data.toUpperCase()), 500));
  }
  
  function saveData(data) {
    return new Promise(resolve => setTimeout(() => resolve('Saved: ' + data), 500));
  }
  
  // Promise chain:
  fetchData()
    .then(data => processData(data))
    .then(processed => saveData(processed))
    .then(result => console.log(result))
    .catch(err => console.error(err));
  
  // TODO: Convert to async/await

  async function runWorkflow(){
    try{
        const data = await fetchData();

        const processed = await processData(data);

        const result = await saveData(processed);

    }
    catch(err){
        console.error(err);
    }
  }
  runWorkflow();


//   ===============================================


  function task1(callback) {
    setTimeout(() => {
      const success = Math.random() > 0.3;
      if (success) callback(null, 'Task 1 success');
      else callback('Task 1 failed', null);
    }, 300);
  }
  
  function task2(callback) {
    setTimeout(() => {
      const success = Math.random() > 0.3;
      if (success) callback(null, 'Task 2 success');
      else callback('Task 2 failed', null);
    }, 300);
  }
  
  // TODO: 
  // 1. Convert to async/await
  // 2. Add try/catch
  // 3. If any task fails, log the error and stop

//   solution
  function task1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() > 0.3;
        if (success) resolve('Task 1 success');
        else reject('Task 1 failed');
      }, 300);
    });
  }
  
  function task2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() > 0.3;
        if (success) resolve('Task 2 success');
        else reject('Task 2 failed');
      }, 300);
    });
  }
  
  // Async/await with error handling
  async function runTasks() {
    try {
      const result1 = await task1();
      console.log(result1);
      
      const result2 = await task2();
      console.log(result2);
      
      console.log('All tasks completed successfully!');
      
    } catch (err) {
      console.error('Task failed:', err);
      // Execution stops here if any task fails
    }
  }
  
  runTasks();

//   ===============================================

async function readAllFiles(){
    try{
        const data1 = await  readFile('file1.txt')
        const data2 = await readfile('file2.txt')
        const data3 = await readfile('file3.txt')

        console.log(data1, data2, data3);
    }catch(err){
        console.error(err);
    }
}
readAllFiles();


// ===============================================

function fetch(url){
    return new Promise((resolve, reject)=>{
        fetch(url)
            .then(res => {
                if(!res.ok){
                    
                }
            })
    })
}
