/* .js files add interaction to your website */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

var acc = document.getElementsByClassName("accordioni");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

/* .js files add interaction to your website */
var factList = [
  "Red-tagging is rapidly shrinking the space for peaceful activism in the Philippines.","The ‘Terror Law’ is a draconian measure that worsens the already atrocious human rights situation in the Philippines, previously tagged as the world’s deadliest country for land and environmental defenders in 2019.",
  "Suspected members of the military arrested 11 activists protesting against the Anti-Terror Law in Cabuyao, Laguna on July 04",
  "Bulacan police confiscated copies of Pinoy Weekly from a Kalipunan ng Damayang Mahihirap (KADAMAY) office in Pandi,Bulacan after claiming the publication was illegal and subversive on July 26",
  "Policemen illegally detained 64 protestors on the way to the SONA mobilization in Carmona, Cavite on July 27",
  "Police illegally arrested five PISTON members on their way to the SONA mobilization in UP Diliman in Quezon City Circle on July 27",
  "Four women activists were arrested in Pandi, Bulacan after staging an online protest during Duterte's SONA",
  "National Democratic Front of the Philippines peace consultant Randall, Ka Randy, Enchanis was found dead in his home in Novaliches on August 10",
  "Human rights activist and former political prisoner Zara Alvarez was gunned down in Mandalagan Bacolod on August 17",
  "Manobo tribe leader Bae Merlin Ansabu Celis was slain by unidentified men in Magpet, Cotabato"
];

var factBtn = document.getElementById("factBtn");
var fact = document.getElementById("fact");
var count = 0;

factBtn.addEventListener("click", displayFact);


function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}

/* .js files add interaction to your website */
var inputButton= document.getElementById("enterButton");
inputButton.addEventListener('click', displayMotivation);

//We want a function that takes the user name and adds it to a personalized message
function displayMotivation(){
  var inputText = document.getElementById("inputText").value;
  var motivational = "I, " + inputText + ", urge for the rejection of the so-called Anti-Terror Bill to protect the fundamental rights of the Filipinos to freedom of speech, as stipulated in Article 3, Section 4 of the 1987 Philippine Constitution. I stand with my Filipino brothers and sisters in speaking out all corruption within the system that the government commits. I will not stand by and watch them deprived of their right to the freedom of speech in protesting out the truth!";
  var displayMessage = document.getElementById("message");
  displayMessage.innerHTML = motivational;

  //you've got this, Emily!
}
