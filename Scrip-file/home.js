const loadIssuesCard = () => {
  fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
    .then(res => res.json())
    .then(data => {
      displayIssues(data.data);
    });
};

const mainBtn = document.getElementById('mainBtnContainer');
const toggleBtn = (id) => {
 
  const btns = document.getElementById(id)
  for (let btn of mainBtn.children) {
    btn.classList.remove('btn-primary');
  }
  btns.classList.add('btn-primary');
}
mainBtn.addEventListener('click', (event) => {
  console.log();
  const parentNode = event.target.parentNode;
})
// toggleBtn()
const displayIssues = issues => {
  const issuesContainer = document.getElementById('cardContainer');
  const issueCount = document.getElementById('issueCount');
  issueCount.innerText = issues.length;

  issuesContainer.innerHTML = '';
  issuesContainer.classList.add('grid', 'grid-cols-4', 'gap-6');

  issues.forEach(issue => {
    let priorityClass = '';
    let borderClass = '';

    if (issue.priority.toLowerCase() === 'medium') {
      priorityClass = 'text-green-600 bg-green-200';
      borderClass = 'border-t-4 border-green-500';
    } else if (issue.priority.toLowerCase() === 'low') {
      priorityClass = 'text-purple-600 bg-purple-200';
      borderClass = 'border-t-4 border-purple-500';
    } else {
      priorityClass = 'text-red-500 bg-red-200';
      borderClass = 'border-t-4 border-red-500';
    }

    const createIssueCard = document.createElement('div');

    createIssueCard.innerHTML = `
      <div class="p-6 sm:p-8 lg:p-10 shadow-sm rounded-md ${borderClass}">

  <div class="flex justify-between items-center mb-2">
    <img class="w-6 sm:w-8" src="./assets/Open-Status.png" alt="">
    
    <a href="#" class="py-1 sm:py-2 px-4 sm:px-6 rounded-full font-semibold text-sm sm:text-base ${priorityClass}">
      ${issue.priority}
    </a>
  </div>

  <div class="space-y-4 sm:space-y-5">
    <h2 class="text-lg sm:text-xl lg:text-2xl font-bold">
      ${issue.title}
    </h2>

    <p class="text-sm sm:text-base lg:text-[18px] text-gray-500">
      ${issue.description}
    </p>

    <div class="flex flex-wrap gap-2">
      <button class="py-1 sm:py-2 px-3 sm:px-6 rounded-full text-[#EF4444] border bg-[#FEECEC] font-semibold text-sm sm:text-base">
        ${issue.labels}
      </button>

      <button class="py-1 sm:py-2 px-3 sm:px-6 rounded-full text-[#D97706] border bg-[#FFF8DB] font-semibold text-sm sm:text-base">
        help wanted
      </button>
    </div>
  </div>

  <hr class="border-gray-400 my-3">

  <div class="mt-2 flex flex-col sm:flex-row sm:justify-between">
    <p class="text-sm sm:text-base lg:text-[18px] text-gray-500">
      #${issue.id} by ${issue.assignee}
    </p>

    <p class="text-sm sm:text-base lg:text-[18px] text-gray-500">
      ${issue.createdAt.split('T')[0]}
    </p>
  </div>

</div>
    `;

    issuesContainer.append(createIssueCard);
  });
};

loadIssuesCard();
