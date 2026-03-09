let allIssues = [];

// API Load
const loadIssuesCard = () => {
  fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
    .then(res => res.json())
    .then(data => {
      allIssues = data.data;
      displayIssues(allIssues);
    });
};

// Button Filter
const mainBtn = document.getElementById('mainBtnContainer');

const toggleBtn = id => {
  const btns = document.getElementById(id);

  for (let btn of mainBtn.children) {
    btn.classList.remove('btn-primary');
  }

  btns.classList.add('btn-primary');

  if (id === 'all-btn') {
    displayIssues(allIssues);
  } else if (id === 'open-btn') {
    const mediumIssues = allIssues.filter(issue => issue.priority === 'medium');
    displayIssues(mediumIssues);
  } else if (id === 'close-btn') {
    const highIssues = allIssues.filter(issue => issue.priority === 'high');
    displayIssues(highIssues);
  }
};

// Card Render
const displayIssues = issues => {
  const issuesContainer = document.getElementById('cardContainer');
  const issueCount = document.getElementById('issueCount');

  issueCount.innerText = issues.length;

  issuesContainer.innerHTML = '';
  issuesContainer.className =
    'p-5 mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6';

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

    const card = document.createElement('div');

    card.innerHTML = `
    
    <div class="p-6 sm:p-8 lg:p-10 shadow-sm rounded-md cursor-pointer ${borderClass}">
    
      <div class="flex justify-between items-center mb-2">
        <img class="w-6 sm:w-8" src="./assets/Open-Status.png">

        <button class="py-1 px-4 rounded-full font-semibold ${priorityClass}">
          ${issue.priority}
        </button>
      </div>

      <div class="space-y-4">
        <h2 class="text-xl font-bold">${issue.title}</h2>

        <p class="text-gray-500">
          ${issue.description}
        </p>

        <div class="flex gap-2">
          <button class="py-1 px-4 rounded-full text-[#EF4444] border bg-[#FEECEC]">
            ${issue.labels}
          </button>
          <button class="py-1 px-4 rounded-full text-[#D97706] border bg-[#FFF8DB]">
            Help Wanted
          </button>
        </div>
      </div>

      <hr class="my-3">

      <div class="flex justify-between text-gray-500">
        <p>#${issue.id} by ${issue.assignee}</p>
        <p>${issue.createdAt.split('T')[0]}</p>
      </div>

    </div>
    `;

    // CARD CLICK EVENT
    card.addEventListener('click', () => openModal(issue));

    issuesContainer.append(card);
  });
};

// Modal card
const openModal = issue => {
  document.getElementById('modalTitle').innerText = issue.title;

  document.getElementById('modalStatus').innerText = issue.status;

  document.getElementById('modalShort').innerText = issue.title;

  document.getElementById('modalDate').innerText =
    issue.createdAt.split('T')[0];

  document.getElementById('modalLabel').innerText = issue.labels;

  document.getElementById('modalDescription').innerText = issue.description;

  document.getElementById('modalAssignee').innerText = issue.assignee;

  const priorityBtn = document.getElementById('modalPriority');

  priorityBtn.innerText = issue.priority;

  // priority color change
  if (issue.priority === 'high') {
    priorityBtn.className = 'px-4 py-2 rounded-full text-red-500 bg-red-200';
  } else if (issue.priority === 'medium') {
    priorityBtn.className =
      'px-4 py-2 rounded-full text-green-600 bg-green-200';
  } else {
    priorityBtn.className =
      'px-4 py-2 rounded-full text-purple-600 bg-purple-200';
  }

  document.getElementById('my_modal_1').showModal();
};

loadIssuesCard();
