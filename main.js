function GoogleLogin() {
  //first of all create google provider object

  var provider=new firebase.auth.GoogleAuthProvider();
  //Login with popup window
  firebase.auth().signInWithPopup(provider).then(function () {
      //code executes after successful login

      window.location="home.html";
  }).catch(function (error) {
      var errorMessage=error.message;
      alert(errorMessage);
  });
}

function createUser() {
  var email=document.getElementById("userEmail").value;
  var password=document.getElementById("userPassword").value;
  var confirmPassword=document.getElementById("confirmPassword").value;

  console.log(password);
  console.log(confirmPassword);
  //validate that both passwords are same
  if(password==confirmPassword)
  {
      //Here we will write create Account code
      //firebase has its own built in create account method
      //lets start
      //it takes two param first one email and second is password
      firebase.auth().createUserWithEmailAndPassword(email,password).then(
          function () {
              //this function executes when account is successfully created
              window.location="home.html";

      }).catch(function (error) {
         //this function handles errors
          var errorMessage=error.message;
          alert(errorMessage);
      });

  }
  else
  {
      //alert when password did not matches
      alert("password does not matches");

  }

}






















/*

function fun() {
  console.log('hello');
}
fun();



var func = () => 'hello';

console.log(func());


var funcc = a => a * 5;

console.log(funcc(3));


function funnnnn() {
  console.log(this);
}
// funnnnn();



// var funnnnn = () => console.log(this);
// funnnnn();


var button = document.querySelector('button');

function funnnnn() {
  console.log(this);
}
button.addEventListener('click', funnnnn);










function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}
  
function myCalculator(num1, num2) // prameter
 {
    let sum = num1 + num2; // 10
    return sum; // 10
  }
  
  let result = myCalculator(5, 5); // stored in result
  myDisplayer(result); // == some in myDisplayer

//===================================================================

  function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function myCalculator(num1, num2) {
    let sum = num1 + num2;
    myDisplayer(sum);
  }
  
  myCalculator(5, 5);

//===================================================================

  function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2; // 5 + 5
    myCallback(sum); // 5 + 5 = 10 
  }
  
  myCalculator(5, 5, myDisplayer);



//  myCallback(10); == myCallback == myDisplayer(10)

//===================================================================


 */
