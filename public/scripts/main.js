/* Blur the element when user leaves one of the divs */
var menuDivs = document.getElementsByClassName("menusections");
var i;

for (i = 0; i < menuDivs.length; i++) {
  menuDivs[i].addEventListener("mouseleave", function() {
    this.classList.toggle("blur");
  });
}

/* This works in the W3 Web Editor */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  /*var panel = acc[i].nextElementSibling;
  panel.style.maxHeight = panel.scrollHeight + "px";*/
  acc[i].addEventListener("click", function() {
    
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
/*
// Get the menu container.
var menuContainer = document.getElementById("sidebar");
var menuLinks = menuContainer.getElementsByClassName("menulinks")

// Get all the links with class="menuitem" inside the menu container.
var menuItems = document.getElementsByClassName("menusections");

// Loop through the menu and add the active class to the current section
for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("wheel", function() {
      for (var j = 0; j < menuLinks.length; j++) {
        var is_not_active = (menuLinks[i].indexOf(" active") === -1);
        var is_active = (menuLinks[i].indexOf(" active") !== -1)
        var enhanced_link = "_" + menuLinks[i]
        if (menuItems[i] === enhanced_link && is_not_active) {
          menuLinks[i].className += " active"
        } else if (is_active)  {
          menuLinks[i].className = menuLinks[i].className.replace(" active", "")
        }
      }
  });
}*/