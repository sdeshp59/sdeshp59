document.addEventListener('DOMContentLoaded', function () {
    const mainTypewriter = document.getElementById('mainTypewriter');
    const subtext = document.getElementById('subtext');
    const menuPane = document.getElementById('menuPane');
    
    const welcomeText = "Welcome to my website.";
    const finalText = "My name is Sarang Deshpande.";
    
    function typeText(text, element, speed, callback) {
      let i = 0;
      element.innerHTML = '';
      function type() {
        if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
          setTimeout(type, speed);
        } else if (callback) {
          callback();
        }
      }
      type();
    }
  
    function deleteText(element, speed, callback) {
      const text = element.innerHTML;
      let i = text.length;
      function erase() {
        if (i > 0) {
          element.innerHTML = text.slice(0, i - 1);
          i--;
          setTimeout(erase, speed);
        } else if (callback) {
          callback();
        }
      }
      erase();
    }
  
    function fadeInElement(element) {
      element.style.visibility = 'visible';
      setTimeout(() => {
        element.style.opacity = 1;
      }, 10);
    }
  
    function fadeInMenuPane(element) {
      element.style.display = 'flex';
      setTimeout(() => {
        element.style.opacity = 1;
      }, 10);
    }
  
    function startAnimation() {
      typeText(welcomeText, mainTypewriter, 100, function() {
        setTimeout(() => {
          deleteText(mainTypewriter, 50, function() {
            setTimeout(() => {
              typeText(finalText, mainTypewriter, 100, function() {
                setTimeout(() => {
                  fadeInElement(subtext);
                  fadeInMenuPane(menuPane);
                }, 1000);
              });
            }, 500);
          });
        }, 1000);
      });
    }
  
    startAnimation();
  });
  