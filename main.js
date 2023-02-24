let addActivityBtn = document.querySelector('#add-activity-btn');
let activity = document.querySelector('#activity');
let activitiesList = document.querySelector('#activities-list');

addActivityBtn.addEventListener('click', async () => {
  let response = await fetch('https://www.boredapi.com/api/activity');
  let data = await response.json();
  let listItem = document.createElement('li');
  listItem.innerText = data.activity;
  listItem.addEventListener('click', toggleDone);
  activitiesList.appendChild(listItem);
});

function toggleDone() {
  if (this.classList.contains('done')) {
    this.classList.remove('done');
  } else {
    this.classList.add('done');
  }
}
