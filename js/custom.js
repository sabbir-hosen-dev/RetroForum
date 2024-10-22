const contentShow = (data) => {
  const {
    image,
    title,
    isActive,
    category,
    author,
    comment_count,
    view_count,
    posted_time,
    id,
  } = data;
  const contentDiv = document.getElementById("content");
  const div = document.createElement("div");
  div.innerHTML = `
    
            <div class=" flex gap-5 mb-5  bg-[#F3F3F5] rounded-xl p-5">
              <div class="relative">
                <div class="w-16 h-16 rounded-3 alt="" >
                  <img class="rounded-lg" src="${image}" />
                </div>
                <div class="absolute -right-1 -top-1 rounded-[100%]   w-4 h-4 ${
                  isActive ? "bg-green-500" : "bg-red-500"
                }"></div>
              </div>
              <div class="">
                <div class="flex gap-4">
                  <small># ${category}</small>
                  <small>Authoe: ${author.name} </small>
                </div>
                <h4 class="font-bold mt-2 mb-2">${title}
                <p >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Molestias, quas.
                </p>
                <div class="border-b mt-3 border-gray-100  border-dashed"></div>
                <div class="flex justify-between gap-2 mt-1">
                  <div class="flex gap-3 text-gray">
                    <div class="flex gap-1 items-center">
                      <i class="fa-regular fa-comment-dots"></i>
                      ${comment_count}
                    </div>

                    <div class="flex gap-1 items-center">
                      <i class="fa-regular fa-eye"></i>
                      ${view_count}
                    </div>

                    <div class="flex gap-1 items-center">
                      <i class="fa-regular fa-clock"></i>
                      ${posted_time}
                    </div>

                  </div>


                 <div class="some-class" onclick='handleRead(${JSON.stringify(
                   data
                 )})'>
                    <i  class="fa-solid text-[12px] cursor-pointer fa-envelope text-white bg-green-400 rounded-full p-1"></i>
                  </div>
                </div>
              </div>
            </div>
    `;
  contentDiv.appendChild(div);
};

const postShow = (data) => {
  const { cover_image, author, title, profile_image, description } = data;
  const { name, posted_date } = author;

  const pContainer = document.getElementById("letest-posts");
  const div = document.createElement("div");

  div.innerHTML = `
  
         <div class="border card rounded-lg border-gray p-4">
            <div class="">
              <img class="rounded-lg" src="${cover_image}" alt="">
            </div>

            <div class="flex gap-2 my-2 items-center">
              <i class="fa-solid fa-calendar-days text-gray"></i>
              <p class="text-gray">${posted_date}</p>
            </div>

            <h2 class="font-bold text-xl">${title}</h2>
            <p class="text-gray my-3">${description} </p>

            <div class="flex gap-2 items-center">
              <div class="logo"><img class=" rounded-full w-12" src="${profile_image}" alt=""></div>
              <div class="flex flex-col gap-1">
                <small class="font-bold text-md">${name}</small>
                <small class="text-gray">Uncomon</small>
              </div>
            </div>
          </div>
  `;

  pContainer.append(div);
};

const readData = [];

const upgrateCountRead = () => {
  const readCount = document.getElementById("readCount");
  readCount.innerText = readData.length;
};

const addReadItem = () => {
  const itemContiner = document.getElementById("readContainer");
  const div = document.createElement("div");
  readData &&
    readData.map((data) => {

      div.innerHTML = `
                    <div class="bg-white p-2 rounded-md mt-4 flex justify-between">
                 
                <small class="font-semibold">${data.title}</small>

                <div class="flex gap-1 items-center">
                  <i class="fa-regular fa-eye"></i>
                  <small class="font-semibold">${data.view_count}</small>
                </div>
              </div>
    `;

    });
    itemContiner.appendChild(div)
};
const handleRead = (data) => {
  readData.push(data);
  upgrateCountRead();
  addReadItem();
};


const btn = document.getElementById("serch");
const form = document.getElementById("s-input");

btn.addEventListener("click" , () => {
  if(form.value == ""){
    alert("Please input value")
  }

  searchCatagory(form.value);

  form.value = " "

})

