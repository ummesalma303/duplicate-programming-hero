const milestoneData = JSON.parse(data).data;

function loadMilestone() {
    const milestones = document.querySelector('.milestones')
    milestones.innerHTML =`${milestoneData.map(function(milestones) {
        return ` <div class="milestone border-b">
              <div class="flex">
                <div class="checkbox"><input type="checkbox" /></div>
                <div onclick = "openMilestone(this,${milestones._id})">
                  <p>
                    ${milestones.name}
                    <span><i class="fas fa-chevron-down"></i></span>
                  </p>
                </div>
              </div>
              <div class="hidden_panel">
               ${milestones.modules.map(function(module){
               return ` <div class="module border-b">
                  <p>${module.name}</p>
                </div>`
               }).join('')}
              </div>
            </div>`
    }).join('')} `;
}


function openMilestone(milestoneElement,id) {
   const currentPanel = milestoneElement.parentNode.nextElementSibling;
   const showPannel = document.querySelector('.show');
   const active = document.querySelector(".active");
   if (active && !milestoneElement.classList.contains("active")) {
     active.classList.remove('active')
   }
   milestoneElement.classList.toggle("active");

   if (!currentPanel.classList.contains('show') && showPannel) {
    showPannel.classList.remove('show');
   }

    showImage(id);

    currentPanel.classList.toggle("show");
}

function showImage(id) {
  const milestoneImage = document.querySelector('.milestoneImage')
  const title = document.querySelector('.title')
  const details = document.querySelector('.details')
  milestoneImage.src = milestoneData[id].image;
  title.innerText = milestoneData[id].name;
  details.innerText = milestoneData[id].description;
}
loadMilestone();





