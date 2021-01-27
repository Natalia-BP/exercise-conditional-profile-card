import "../style/index.scss";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    function {
        includeCover: true, // if includeCover is true the algorithm should
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the url of the image that will used as background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "left", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: "alesanchezr",
        linkedin: null,
        instagram: null,

        name: null,
        lastname: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); //print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // Inputs de texto
  let nombre = variables.name;
  if (variables.name == null) {
    nombre = " ";
  }

  let apellido = variables.lastname;
  if (variables.lastname == null) {
    apellido = " ";
  }

  let ciudad = variables.city;
  if (variables.city == null) {
    ciudad = " ";
  }

  let pais = variables.country;
  if (variables.country == null) {
    pais = " ";
  }

  let trabajo = variables.role;
  if (variables.role == null) {
    trabajo = " ";
  }

  let rdTwitter = variables.twitter;
  if (variables.twitter == null) {
    rdTwitter = " ";
  }

  let rdGitHub = variables.github;
  if (variables.github == null) {
    rdGitHub = " ";
  }

  let rdLinkedin = variables.linkedin;
  if (variables.linkedin == null) {
    rdLinkedin = " ";
  }

  let rdInstagram = variables.instagram;
  if (variables.instagram == null) {
    rdInstagram = " ";
  }

  //   Boton redes
  let social = "";
  if (variables.socialMediaPosition != null) {
    social = `<ul class="${variables.socialMediaPosition}">
            <li><a href=${rdTwitter}><i class="fa fa-twitter"></i></a></li>
            <li><a href=${rdGitHub}><i class="fa fa-github"></i></a></li>
            <li><a href=${rdLinkedin}><i class="fa fa-linkedin"></i></a></li>
            <li><a href=${rdInstagram}><i class="fa fa-instagram"></i></a></li>
          </ul>`;
  }

  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo"/>
          <h1>${nombre} ${apellido}</h1>
          <h2>${trabajo}</h2>
           <h3>${ciudad}, ${pais}</h3>
            ${social}
          </div>`;
}
/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    // social media bar position (left or right)
    socialMediaPosition: null,
    // social media usernames
    twitter: null,
    github: "alesanchezr",
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); //render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new valus
    });
  });
};
