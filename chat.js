// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyDFGN-9d6VEL39dnw3wuLMjoBB2Jx7hN-o",
  authDomain: "kwitter-app-25833.firebaseapp.com",
  databaseURL: "https://kwitter-app-25833-default-rtdb.firebaseio.com",
  projectId: "kwitter-app-25833",
  storageBucket: "kwitter-app-25833.appspot.com",
  messagingSenderId: "1021232113706",
  appId: "1:1021232113706:web:b7e2d1c455b9e43078bb53"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser() {
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose: "adding user"
  });
  localStorage.setItem("user_name", user_name);
  window.location = "chat_room.html";
}

user_name = localStorage.getItem("user_name");




function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
    });
  });
}
getData();