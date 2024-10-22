const loadALlData = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/posts"
  );
  const data = await res.json();

  data.posts.map((post) => contentShow(post));
};

const loadLatestPostData = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/latest-posts"
  );
  const data = await res.json();
  data.map((data) => postShow(data));
};

const searchCatagory = async (catagory) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/retro-forum/posts?category=${catagory}`
  );
  const data = await res.json();
  const contentDiv = document.getElementById("content");

  if (data.posts.length == 0) {
    contentDiv.innerHTML = `
      <div class="flex justify-center items-center h-[200px]">
        <h1 class="font-bold text-2xl"> Data Not Found </h1>
      </div>
    `
  } else {
    contentDiv.innerHTML = " ";
    data.posts.map((data) => contentShow(data));
  }
};

loadLatestPostData();

loadALlData();
