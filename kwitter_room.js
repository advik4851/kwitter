
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyD1rECuPFAFQSa4raZK0W_l5QvkgLXlTHY",
      authDomain: "kwitter-13c99.firebaseapp.com",
      databaseURL: "https://kwitter-13c99-default-rtdb.firebaseio.com",
      projectId: "kwitter-13c99",
      storageBucket: "kwitter-13c99.appspot.com",
      messagingSenderId: "1040972197148",
      appId: "1:1040972197148:web:a55c5ec50b513013a25ed9"
    };
    
    // Initialize Firebase
    firebaseConfig.initializeApp(firebaseConfig);
    user_name = localStorage.getItem('user_name');
    document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+ Room_names + "onclick='redirectToRoomName(this.id)'>#"+ Room_names + "</div><hr>";
     document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setitem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{

      console.log(name);
      localStorage.setitem("room_name", name);
            window.location = "kwitter_page.html";

}