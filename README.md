# 🌟 Welcome To (সহজ সরল সিম্পল) Assignment - 5

# **📅 Deadline For 60 marks:** 9th March, 2026 (11:59 pm ⏱️)  
#  📅 No Deadline For 50 marks  
# **📅 Deadline For 30 marks:** Any time after 9th March.

---

# Assignment-05: GitHub Issues Tracker


### **API Endpoints:**
###  **All Issues:** 
  - https://phi-lab-server.vercel.app/api/v1/lab/issues 


###  **Single Issue:**
   - https://phi-lab-server.vercel.app/api/v1/lab/issue/{id}

   - Example: https://phi-lab-server.vercel.app/api/v1/lab/issue/33


###  **Search Issue:** https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q={searchText}

   - Example:  https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=notifications


---

## 📝 Main Requirements

## 🎨 Design Part

## Login Page
- Create a login page containing a logo, title, and sub-title
- Below that, there will be 2 inputs, a sign-in button, and a demo credential to sign in. Follow the Figma for this page 
- Styled as per Figma

## Main Page: 

### Navbar: 

- Navbar with website logo/name on the left
- Search input and button on the right

### Tab Section like Figma: 

- 3 tab ( All, Open, Closed) at the top of this section.(**All**, **Open**, **Closed**)

- Below the tab, there will be an icon, the issue count, some text on the left, and an open and closed marker on the right

- Responsiveness: The website should be responsive for mobile devices. It is totally up to you. 


--- 


## ⚙️ Functionalities
- In login page, there will be default admin credentials (username, password). You need to sign in using these credentials.

- Load all issues and display as per Figma

- On clicking on an open or closed tab, it will load the issues data of the related tab and show it in a display-like card in a 4-column layout like Figma. By default, it will show all data 

- Each card shows:
  - Title
  - Description
  - Status 
  - Author
  - Priority
  - Label
  - CreatedAt
- Clicking on an issue  card will open a modal and show all the information about that Issue. 

### 🚀 Challenges


- Show the card Top border based on their category(open, closed), open card will have Green Boder, closed card will have a purple border on top. 

- Loading spinner on data load

- Show active button on changing category names

- Implement Search Functionality and 8 meaningful github commit.  

- Create a readme file and answer this question on your own. Don’t copy-paste from Google or any AI chatbot. 
    - 1️⃣ What is the difference between var, let, and const?
    - 2️⃣ What is the spread operator (...)?
    - 3️⃣ What is the difference between map(), filter(), and forEach()?
    - 4️⃣ What is an arrow function?
    - 5️⃣ What are template literals?


---

## 🛠️ Technology Stack

- **HTML**
- **CSS** (Vanilla/Tailwind/DaisyUI)
- **JavaScript** (Vanilla)

---

## 🔑 Demo Credentials

```text
Username: admin
Password: admin123
```


---

### Optional: 
 - No need to show status: Open, Closed styles On modals. 
 - No Need to show icon on labels 
 - No need to apply styles on Priority 
--- 


## 📤 What to submit

- **GitHub Repository Link:**
- **Live Site Link:**

---


onclick="my_modal_1.showModal()"


 <dialog id="my_modal_1" class="modal">
    <div class="modal-box">
      <!-- My Modal -->
    <div class="space-y-5">
      <h2 id="modalTitle" class="text-2xl font-bold">Fix broken image uploads</h2>
      <div class="flex items-center gap-1">
        <button id="modalStatus"
          class="py-1 sm:py-2 px-3 sm:px-6 rounded-full text-white border bg-green-700 text-sm sm:text-base border-none ">
         Opened
        </button>
        
        <p id="modalShort" class="ml-1">Lorem ipsum dolor sit amet.</p>
        <span id="modalDate">
          <p>10/3/2001</p>
        </span>
    
      </div>
      <!-- bug / help wanted -->
      <div class="">
        <button id="modalLabel"
          class="py-1 sm:py-2 px-3 sm:px-6 rounded-full text-[#EF4444] border bg-[#FEECEC] font-semibold text-sm sm:text-base">
          Bug
        </button>
    
        <button id="modalDescription"
          class="py-1 sm:py-2 px-3 sm:px-6 rounded-full text-[#D97706] border bg-[#FFF8DB] font-semibold text-sm sm:text-base">
          help wanted
        </button>
      </div>
      <p id="modalDescription" class="text-[18px] text-gray-400">The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.</p>
      <div class="bg-gray-100 p-3 flex justify-around items-center rounded-md">
        <div class="space-y-2">
          <p class="">Assigne :</p>
          <h3 id="modalAssignee" class="font-bold">Milon</h3>
        </div>
        <div class="space-y-2">
          <p>Priority:</p>
          <button  href="#"
            class="space-y-2 sm:py-2 px-4 sm:px-6 rounded-full font-semibold text-sm sm:text-base text-red-500 bg-red-200">
            high
          </button>
        </div>
      </div>
    </div>
    
      <div class="modal-action">
        <form method="dialog">
          <!-- if there is a button in form, it will close the modal -->
          <button class="btn btn-primary">Close</button>
        </form>
      </div>
    </div>
  </dialog>
  