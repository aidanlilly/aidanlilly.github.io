var carousel = document.querySelector('.carousel');
var cells = carousel.querySelectorAll('.carousel__cell');
var instructions = document.querySelector('.instructions');
var cellCount; // cellCount set from cells-range input value
var selectedIndex = 0;
var cellWidth = 10 * vw(10);
var cellHeight = carousel.offsetHeight;
var isHorizontal = true;
var rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
var radius, theta;
var startUp = true;
var currentTileIndex;
var overlay = false;
//Change number of cells
var cellCount = 3;


// Get references to the tiles and their associated information divs
const tiles = document.querySelectorAll('.tile');
const tileInfoDivs = document.querySelectorAll('.tile-info');

// Function to hide all info divs
function hideAllInfoDivs() {
  for (const infoDiv of tileInfoDivs) {
    infoDiv.style.display = 'none';
    infoDiv.style.opacity = 0;
  }
}

// Function to show the info div associated with the current front tile
function showInfoForFrontTile() {
  hideAllInfoDivs(); // Hide all info divs

  switch(selectedIndex % 3){
    default:
        currentTileIndex = selectedIndex % 3;
        break;
    case -1:
      currentTileIndex = 2;
      break;
    case -2:
      currentTileIndex = 1;
      break;
  }

  const associatedInfoDiv = document.getElementById('tile' + (currentTileIndex + 1) + '-info');
  
  if (associatedInfoDiv) {
    associatedInfoDiv.style.display = "block";
    setTimeout(() => {
      associatedInfoDiv.style.opacity = 1;
    }, 10); // Delay the opacity change for the fade-in effect
  }
}

// Initial call to show info for the initial front tile
showInfoForFrontTile();

document.addEventListener('DOMContentLoaded', function() {
    const landingPage = document.querySelector(".landing-page");
    const mainPage = document.querySelector(".scene");
    const header = document.querySelector('.header')


    window.addEventListener('wheel', function(event) {
      console.log(overlay);
      if(overlay == false){
            if (startUp == true){
              if (event.deltaY > 0){
                landingPage.style.transform = "translateY(-100%)";
                mainPage.style.transform = "translateY(0)";
                startUp = false;
              } else{
                landingPage.style.transform = "translateY(100%)";
                mainPage.style.transform = "translateY(0)";
                startUp = false;
              }
            }else{
            // Calculate the new rotation index based on the scroll direction
            if (event.deltaY > 0) {
                selectedIndex--;
                rotateCarousel();
            } else {
                selectedIndex++;
                rotateCarousel();
            }
            setTimeout(() => {
              showInfoForFrontTile();
            }, 100);
          }
        }
    });

    window.addEventListener('resize', function() {
        cellWidth = 10 * vw(10);
        changeCarousel();
      });
});

function pauseCarousel(){
  overlay = true;
}

function resumeCarousel(){
  overlay = false;
}

function cell1Clicked() {

  var mainCell = document.querySelector('.carousel__cell-1');
  var targetContainer = document.getElementById('iframe-container');
  var overlay = document.getElementById('overlay1');
  var cellContent = document.getElementById('iframe');

  var scene = document.querySelector('.scene');

  var cells = document.querySelectorAll('.carousel__cell');
  var overlayTitle = document.getElementById('overlay-tile1-info');
  var overlayDesc = document.getElementById('overlay-tile1-desc');
  var overlayIcons = document.getElementById('icons-container1');
  var overlayFeatures = document.getElementById('key-features1');

  var mazeIframe = document.querySelector('.maze-iframe')

  hideInstruc();
  pauseHomeBtn();
  //Disable close button
  var button = document.getElementById('btn1');
  button.disabled = true;
  setTimeout(() => {
    button.disabled = false;
  }, "1000");

  mainCell.classList.add('remove-hover'); //
  overlay.classList.remove('close');
  overlay.style.display='block';

  for (var i =1; i<cells.length; i++){
    var altCell = document.querySelector('.carousel__cell:nth-child(9n+' + (i+1) + ')');
    altCell.classList.remove('reveal');
    altCell.classList.add('hidden');
  }

  setTimeout(() => {
    mazeIframe.style.pointerEvents='auto';//
    targetContainer.appendChild(cellContent);//
    overlayTitle.style.display='flex';
    overlayDesc.classList.add('reveal');
    overlayIcons.classList.add('reveal');
    overlayFeatures.classList.add('reveal');
    scene.style.display='none';//

    for (var i =1; i<cells.length; i++){
      var altCell = document.querySelector('.carousel__cell:nth-child(9n+' + (i+1) + ')');
      altCell.style.display='none';
    }
  }, "1000");
  pauseCarousel();
}

function cell2Clicked() {

  var mainCell = document.querySelector('.carousel__cell-2');
  var overlay = document.getElementById('overlay2');
  var cellContent = document.getElementById('movie-img-id');

  var scene = document.querySelector('.scene');

  var cells = document.querySelectorAll('.carousel__cell');
  var overlayTitle = document.getElementById('overlay-tile2-info');
  var overlayDesc = document.getElementById('overlay-tile2-desc');
  var overlayIcons = document.getElementById('icons-container2');
  var overlayFeatures = document.getElementById('key-features2');

  hideInstruc();
  pauseHomeBtn();
  //Disable close button
  var button = document.getElementById('btn2');
  button.disabled = true;
  setTimeout(() => {
    button.disabled = false;
  }, "1000");

  mainCell.classList.add('remove-hover'); //
  mainCell.style.pointerEvents='none';
  overlay.classList.remove('close');
  overlay.style.display='block';
  cellContent.style.display = 'block';

  for (var i =0; i<cells.length; i++){
    if(i != 1){
    var altCell = document.querySelector('.carousel__cell:nth-child(9n+' + (i+1) + ')');
    altCell.classList.remove('reveal');
    altCell.classList.add('hidden');
    }
  }

  setTimeout(() => {
    overlayTitle.style.display='flex';
    overlayDesc.classList.add('reveal');
    overlayIcons.classList.add('reveal');
    overlayFeatures.classList.add('reveal');

    scene.style.display='none';//

    for (var i =0; i<cells.length; i++){
      if (i != 1){
      var altCell = document.querySelector('.carousel__cell:nth-child(9n+' + (i+1) + ')');
      altCell.style.display='none';
      }
    }
  }, "1000");
  pauseCarousel();
}

function cell3Clicked() {

  var mainCell = document.querySelector('.carousel__cell-3');
  var overlay = document.getElementById('overlay3');
  var cellContent = document.getElementById('video-id');

  var scene = document.querySelector('.scene');

  var cells = document.querySelectorAll('.carousel__cell');
  var overlayTitle = document.getElementById('overlay-tile3-info');
  var overlayDesc = document.getElementById('overlay-tile3-desc');
  var overlayIcons = document.getElementById('icons-container3');
  var overlayFeatures = document.getElementById('key-features3');

  hideInstruc();
  pauseHomeBtn();
  //Disable close button
  var button = document.getElementById('btn3');
  button.disabled = true;
  setTimeout(() => {
    button.disabled = false;
  }, "1000");

  mainCell.classList.add('remove-hover'); //
  mainCell.style.pointerEvents='none';
  overlay.classList.remove('close');
  overlay.style.display='block';

  for (var i =0; i<cells.length; i++){
    if(i != 2){
    var altCell = document.querySelector('.carousel__cell:nth-child(9n+' + (i+1) + ')');
    altCell.classList.remove('reveal');
    altCell.classList.add('hidden');
    }
  }

  setTimeout(() => {
    overlayTitle.style.display='flex';
    overlayDesc.classList.add('reveal');
    overlayIcons.classList.add('reveal');
    overlayFeatures.classList.add('reveal');
    cellContent.style.display='block'

    scene.style.display='none';//

    for (var i =0; i<cells.length; i++){
      if (i != 2){
      var altCell = document.querySelector('.carousel__cell:nth-child(9n+' + (i+1) + ')');
      altCell.style.display='none';
      }
    }
  }, "1000");
  pauseCarousel();
}


function closeOverlay1(){
  
  var mainCell = document.querySelector('.carousel__cell-1');
  var targetContainer = document.getElementById('cell1');
  var cellContent = document.getElementById('iframe');
  var overlay = document.getElementById('overlay1');
  var instruc = document.querySelector('.click-instructions');

  var cells = document.querySelectorAll('.carousel__cell');
  var scene = document.querySelector('.scene');
  var overlayTitle = document.getElementById('overlay-tile1-info');
  var overlayDesc = document.getElementById('overlay-tile1-desc');
  var overlayIcons = document.getElementById('icons-container1');
  var overlayFeatures = document.getElementById('key-features1');

  var mazeIframe = document.querySelector('.maze-iframe')

  showInstruc();
  overlay.classList.add('close');
  targetContainer.appendChild(cellContent);
  scene.style.display='flex';
  overlayTitle.classList.remove('reveal');
  overlayTitle.style.display='none';

  for (var i =1; i<cells.length; i++){
      var altCell = document.querySelector('.carousel__cell:nth-child(9n+' + (i+1) + ')');
      altCell.classList.remove('hidden');
      altCell.style.display='block';
      altCell.classList.add('reveal');
    }

  setTimeout(() => {
    overlay.style.display='none';
    mazeIframe.style.pointerEvents='none';
    mainCell.classList.remove('remove-hover');
    overlayDesc.classList.remove('reveal');
    overlayFeatures.classList.remove('reveal');
    overlayIcons.classList.remove('reveal');
    
    resumeCarousel();
  }, "1000");
}

function closeOverlay2(){
  var mainCell = document.querySelector('.carousel__cell-2');
  var overlay = document.getElementById('overlay2');

  var cells = document.querySelectorAll('.carousel__cell');
  var scene = document.querySelector('.scene');
  var overlayTitle = document.getElementById('overlay-tile2-info');
  var overlayDesc = document.getElementById('overlay-tile2-desc');
  var overlayIcons = document.getElementById('icons-container2');
  var overlayFeatures = document.getElementById('key-features2');

  showInstruc();
  overlay.classList.add('close');
  scene.style.display='flex';
  overlayTitle.classList.remove('reveal');
  overlayTitle.style.display='none';

  for (var i =0; i<cells.length; i++){
    if(i != 1){
      var altCell = document.querySelector('.carousel__cell:nth-child(9n+' + (i+1) + ')');
      altCell.classList.remove('hidden');
      altCell.style.display='block';
      altCell.classList.add('reveal');
    }
    }
  setTimeout(() => {
    overlay.style.display='none';
    mainCell.classList.remove('remove-hover');
    overlayDesc.classList.remove('reveal');
    overlayFeatures.classList.remove('reveal');
    overlayIcons.classList.remove('reveal');
    mainCell.style.pointerEvents='auto';
    resumeCarousel();
  }, "1000");
}

function closeOverlay3(){
  var mainCell = document.querySelector('.carousel__cell-3');
  var overlay = document.getElementById('overlay3');

  var cells = document.querySelectorAll('.carousel__cell');
  var scene = document.querySelector('.scene');
  var overlayTitle = document.getElementById('overlay-tile3-info');
  var overlayDesc = document.getElementById('overlay-tile3-desc');
  var overlayIcons = document.getElementById('icons-container3');
  var overlayFeatures = document.getElementById('key-features3');

  showInstruc();
  overlay.classList.add('close');
  scene.style.display='flex';
  overlayTitle.classList.remove('reveal');
  overlayTitle.style.display='none';

  for (var i =0; i<cells.length; i++){
    if(i != 2){
      var altCell = document.querySelector('.carousel__cell:nth-child(9n+' + (i+1) + ')');
      altCell.classList.remove('hidden');
      altCell.style.display='block';
      altCell.classList.add('reveal');
    }
    }
  setTimeout(() => {
    overlay.style.display='none';
    mainCell.classList.remove('remove-hover');
    overlayDesc.classList.remove('reveal');
    overlayFeatures.classList.remove('reveal');
    overlayIcons.classList.remove('reveal');
    mainCell.style.pointerEvents='auto';
    resumeCarousel();
  }, "1000");
}

function homeFunc(){  
  closeOverlay1();
  closeOverlay2();
  closeOverlay3();
  closeAboutPage();
  closeContactInfo()
  pauseHomeBtn();
}

function pauseHomeBtn(){
  var homeBtn = document.getElementById('logo-link');
  homeBtn.style.pointerEvents='none';
  setTimeout(() => {
    homeBtn.style.pointerEvents='auto';
  }, "1000");
}

function hideInstruc(){
  instructions.style.display='none';
}

function showInstruc(){
  instructions.style.display='flex';
}


function openAboutPage() {
  document.getElementById("about-page").style.right = "0";
  pauseCarousel();
}

function closeAboutPage() {
  document.getElementById("about-page").style.right = "-100%";
  resumeCarousel();
}

function openContactInfo(){
    const overlay = document.getElementById("contact-overlay-id");
    const overlayContent = document.querySelector(".contact-overlay-content");

    // Slide up animation
    overlay.style.transform = "translateY(0)";
    overlayContent.style.transform = "translateY(0)";
}

function closeContactInfo(){
  const overlay = document.getElementById("contact-overlay-id");

    // Slide down animation
    overlay.style.transform = "translateY(100%)";
}




function vh(percent) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (percent * h) / 100;
  }
  
  function vw(percent) {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return (percent * w) / 100;
  }
  
  function vmin(percent) {
    return Math.min(vh(percent), vw(percent));
  }
  
  function vmax(percent) {
    return Math.max(vh(percent), vw(percent));
  }



// console.log( cellWidth, cellHeight );

function rotateCarousel() {
  var angle = theta * selectedIndex * -1;
  carousel.style.transform = 'translateZ(' + -radius + 'px) ' + 
    'rotateY' + '(' + angle + 'deg)';
}


function changeCarousel() {
  theta = 360 / cellCount;
  var cellSize = cellWidth;
  radius = Math.round( ( cellSize / 2) / Math.tan( Math.PI / cellCount ) );
  for ( var i=0; i < cells.length; i++ ) {
    var cell = cells[i];
    if ( i < cellCount ) {
      // visible cell
      cell.style.opacity = 1;
      var cellAngle = theta * i;
      cell.style.transform = rotateFn + '(' + cellAngle + 'deg) translateZ(' + radius + 'px)';

    } else {
      // hidden cell
      cell.style.opacity = 0;
      cell.style.transform = 'none';
    }
  }

  rotateCarousel();
}
// set initials
changeCarousel();