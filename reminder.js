

function set_Reminder(){


  var year = document.getElementById("year").value
  var month = document.getElementById("month").value
  var day = document.getElementById("date").value
  var hour = document.getElementById("hour").value
  var minute= document.getElementById("minute").value
  document.getElementById("year").value ="";
  document.getElementById("month").value="";
  document.getElementById("date").value="";
  document.getElementById("hour").value="";
  document.getElementById("minute").value="";

//  var options = {
  //  scriptPath : path.join(__dirname, '/../engine/'),
    //args : [year, month, date, hour, minute]
  //}
ppathTest()
  //var reminder = new python('SetReminder.py', options);

  //reminder.on('message', function(message){
  //  swal(message);
  //})
}
