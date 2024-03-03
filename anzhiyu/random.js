var posts=["2024/03/03/hello-world/","2024/03/03/afcs/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };