const loadALlData = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/retro-forum/posts");
  const data = await res.json();

  data.posts.map( post => contentShow(post) )
  
}


const loadLatestPostData = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/retro-forum/latest-posts");
  const data = await res.json();
  console.log(data)
  data.map(data => postShow(data));
}

loadLatestPostData()

loadALlData();