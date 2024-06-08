const milestoneData = JSON.parse(data).data;

function loadMilestone() {
    const milestones = document.querySelector('.milestones')
    milestones.innerHTML =`${milestoneData.map(function(milestones) {
        return ` <div class="milestone border-b">
              <div class="flex">
                <div class="checkbox"><input type="checkbox" /></div>
                <div onclick = "openMilestone(this)">
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


function openMilestone(milestoneElement) {
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

    

    currentPanel.classList.toggle("show");
}


loadMilestone();





