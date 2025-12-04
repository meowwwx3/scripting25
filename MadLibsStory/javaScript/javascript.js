console.log("MEOWWW!!!!");
//function stuff under here
function write() {
  //first name
  let firstname = document.getElementById("name").value;
  console.log(firstname);
  // favourite animal
  let animal = document.getElementById("fAnimal").value;
  console.log(animal);
  //Favourite food
  let favfood = document.getElementById("food").value;
  console.log(favfood);
  //favourite drink
  let favdrink = document.getElementById("drink").value;
  console.log(favdrink);
  //location 1
  let loc = document.getElementById("location").value;
  console.log(loc);
  //transportation
  let tran = document.getElementById("transportation").value;
  console.log(tran);
  //diffrent location
  let location2 = document.getElementById("difLocation").value;
  console.log(location2);
  //activity
  let Anactivity = document.getElementById("activity").value;
  console.log(Anactivity);
  //What happens
  let whathappens = document.getElementById("blank1").value;
  console.log(whathappens);
  // What do you do
  let whatdoyoudo = document.getElementById("blank2").value;
  console.log(whatdoyoudo);

  document.getElementById("output").innerHTML +=
    firstname +
    "<p> want's to go on a vaction but they don't know where they want to go, they want to see a  " +
    animal +
    " that's in a few diffrent areas! They start thinking of other things to decide where to go, something strikes them, their favourite food " +
    favfood +
    "! they also want to drink their favourite drink, " +
    favdrink +
    ". this allowed for " +
    firstname +
    " to realize they want to go to " +
    loc +
    "! They decided the best form of transportation would be by " +
    tran +
    ". Once they arrived they decided to drive to " +
    location2 +
    " they decided on this area because it has their favourite acivity " +
    Anactivity +
    ", at this activity " +
    whathappens +
    ". At the end of they day they decide to " +
    whatdoyoudo +
    ". This brings an end to the trip, they then travel back home by " +
    tran +
    " and have a great time telling everyone about it. <h3>THE END.</h3>";
  ("</p>");
}
