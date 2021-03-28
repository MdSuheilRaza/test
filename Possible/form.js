
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDxRyujvxVJxZQtU-7Wv-UxRcUBgEa1qG0",
    authDomain: "possible-357d9.firebaseapp.com",
    projectId: "possible-357d9",
    storageBucket: "possible-357d9.appspot.com",
    messagingSenderId: "146210896651",
    appId: "1:146210896651:web:f1a3302d5029b86684c00e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  function signUp(){

      var email = document.getElementById("email");
      var password = document.getElementById("password");

      const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
      promise.catch(e => alert(e.message))
      alert("Signed Up");

  }

  function singIn(){

      var email = document.getElementById("email");
      var password = document.getElementById("password");

      const promise = auth.signInWithEmailAndPassword(email.value, password.value);
      promise.catch(e => alert(e.message))
      alert("Signed In"+email);

  }

  function signOut(){
      auth.signOut();
      alert("Signed Out");
  }

  auth.onAuthStateChanged(function(user){
    if(user){
      var email = user.email;
      alert("Active user "+email);
    }
    
    else{
      alert("No Active User");
    }
  })