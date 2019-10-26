// Anim section 1

if (screen.height > 900) {
  document.getElementById("weare").className = "anim-3-s1 mb-2 ml-5-p m-16";

  document.getElementById("cadre-s1").className = "cadre anim-1-s1 ";
  document.getElementById("image-s1").className = "image anim-1-s1 ";
}

if (screen.width < 768) {
  document.getElementById("weare").className = "anim-3-s1 mb-2 ml-5-p m-16";
}

window.onscroll = function() {
  if (document.documentElement.scrollTop != 0 && screen.width > 1024) {
    document.getElementById("aboutus").className =
      "h-35 flex flex-col items-center mt-5-p anim-2-s1 ";
  }
  if (document.documentElement.scrollTop > 60) {
    document.getElementById("weare").className = "anim-3-s1 mb-2 ml-5-p m-16";
  }
  if (document.documentElement.scrollTop > 291) {
    document.getElementById("cadre-s1").className = "cadre anim-1-s1 ";
    document.getElementById("image-s1").className = "image anim-1-s1 ";
  }
};
