var gpapass = [];
var gpavisible = false;
var gpactrlon = false;

function gpagetpassword () {
   let password = '';
   
   for (let passkey of gpapass) {
      if (passkey[0] == 1) { // text key
         password += '[1-' + passkey[1] + ']';
      } else if (passkey[0] == 2) { // graphic key
         password += '[2-' + passkey[1][0] + '-' + passkey[1][1] + ']';
      }
   }
   
   return password;
}

function clearpassword () {
   gpapass = [];
   setinvisible();
   displaypassword();
}

function deletepassword () {
   gpapass.pop();
   displaypassword();
}

function addvaluepassword (value) {
   gpapass.push([1, value]);
   displaypassword();
}

function addgraphicpassword (color, shape) {
   gpapass.push([2, [color, shape]]);
   displaypassword();
}

function setinvisible () {
   if (gpavisible) {
      gpavisible = false;
      displaypassword();
   }
}

function setvisible () {
   if (gpavisible == false) {
      gpavisible = true;
      displaypassword();
   }
}

function displaypassword () {
   if (gpapass.length) {
      $(".gpa-clear-btn").removeClass("d-none");
   } else {
      $(".gpa-clear-btn").addClass("d-none");
   }
   
   if (gpavisible) {
      $(".gpa-visibility-off-btn").addClass("d-none");
      $(".gpa-visibility-on-btn").removeClass("d-none");
      
      $(".gpa-passwordbox").html("");
      
      for (let passkey of gpapass) {
         if (passkey[0] == 1) { // text key
            $(".gpa-passwordbox").append(
               `<div
                  class="gpa-block gpa-value-block
                     position-relative p-0"
               >`
               + passkey[1]
               + `</div>`
            );
         } else if (passkey[0] == 2) { // graphic key
            $(".gpa-passwordbox").append(
               `<div
                  class="gpa-block gpa-graphic-block gpa-graphic-`
               + passkey[1][1]
               + ` position-relative p-1"
                  style="background-color: `
               + passkey[1][0]
               + `;"
               >
               </div>`
            );
         }
      }
   } else {
      $(".gpa-visibility-off-btn").removeClass("d-none");
      $(".gpa-visibility-on-btn").addClass("d-none");
      
      $(".gpa-passwordbox").html("");
      
      for (let passkey in gpapass) {
         $(".gpa-passwordbox").append(
            `<div
               class="gpa-block gpa-hidden-block
                  position-relative p-1"
            >X
            </div>`
         );
      }
   }
}

function renderkeyboard (e) {
   let key = e.key;
   let keyCode = e.keyCode;
   
   // Print key info
   $(".gpa .gpa-text-display-area").text((
      key + '(' + keyCode + ')'
   ));
   
   if (keyCode == 13) { // Enter
      gpactrlon = false;
      
      // Print password
      $(".gpa .gpa-text-display-area").text((
         'Password: ' + gpagetpassword()
      ));
   } else if (keyCode == 8 || keyCode == 46 || keyCode == 127) { // Backspace
      gpactrlon = false;
      deletepassword();
   } else {
      if ((gpactrlon == false)
         && (((keyCode >= 48) && (keyCode <= 57))
            || ((keyCode >= 65) && (keyCode <= 105) && (keyCode != 91))
            || ((keyCode >= 185) && (keyCode <= 200))
         )
      ) {
         addvaluepassword(key);
      } else if ((gpactrlon)
         && (((keyCode >= 65) && (keyCode <= 76))
         )
      ) {
         gpactrlon = false;
         
         let colorshapeindex = [
            ['red', 'circle'],
            ['green', 'circle'],
            ['blue', 'circle'],
            ['yellow', 'circle'],
            ['red', 'square'],
            ['green', 'square'],
            ['blue', 'square'],
            ['yellow', 'square'],
            ['red', 'rectangle'],
            ['green', 'rectangle'],
            ['blue', 'rectangle'],
            ['yellow', 'rectangle'],
         ];
         
         let cspass = colorshapeindex[keyCode - 65];
         
         addgraphicpassword(cspass[0], cspass[1]);
      } else {
         if (keyCode == 17) { // Ctrl key
            gpactrlon = true;
         } else {
            gpactrlon = false;
         }
      }
   }
}

var vtenabled = false;

$(document).ready(function() {
   $(".gpa-vt-area").addClass('d-none');
   
   setinvisible();
   clearpassword();
   displaypassword();
   
   $(".gpa .gpa-clear-btn").on("click", clearpassword);
   $(".gpa .gpa-visibility-on-btn").on("click", setinvisible);
   $(".gpa .gpa-visibility-off-btn").on("click", setvisible);
   $(".gpa .gpa-virtualtablet-btn").on("click", function () {
      if (vtenabled) {
         vtenabled = false;
         $(".gpa-vt-area").addClass('d-none');
      } else {
         vtenabled = true;
         $(".gpa-vt-area").removeClass('d-none');
      }
   });
   
   $(window).keydown(renderkeyboard);
   
   $(".gpa .gpa-text-display-area").html(
      "Press any key to parse.<BR />Tap on [Control]: Enable CKey.<BR />"
      + "CKey: [Shift] + [a - l]<BR />Any other key: Disable CKey.<BR />"
      + "[Enter]: Display password."
   );
   
   $(".gpa .vt-arow").html('');
   let csi = [
      ['red', 'circle'],
      ['green', 'circle'],
      ['blue', 'circle'],
      ['yellow', 'circle'],
      ['red', 'square'],
      ['green', 'square'],
      ['blue', 'square'],
      ['yellow', 'square'],
      ['red', 'rectangle'],
      ['green', 'rectangle'],
      ['blue', 'rectangle'],
      ['yellow', 'rectangle'],
   ];
   
   for (csval of csi) {
      $(".gpa .vt-arow").append(
         `<div class="col-3 p-1">
            <div
               class="vt-block ms-auto me-auto vt-`
               + csval[1] + `"
               style="background-color: `
               + csval[0] + `;"
               vt-color="`
               + csval[0] + `"
               vt-shape="`
               + csval[1] + `"
            >
            </div>
         </div>`
      );
   }
   
   $(".gpa .vt-arow .vt-block").on('click', function () {
      let color = $(this).attr('vt-color');
      let shape = $(this).attr('vt-shape');
      
      addgraphicpassword(color, shape);
   });
});
