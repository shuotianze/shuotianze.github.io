var posts=["posts/53c434b7.html","posts/c63de874.html","posts/95fbf3c4.html","posts/26613.html","posts/239398fe.html","posts/74ca0f44.html","posts/af13ea20.html","posts/542f557.html","posts/227c86de.html","posts/9daba997.html","posts/36274.html","posts/e663c76e.html","posts/da5e96bf.html","posts/17450.html","posts/ff532bef.html","posts/40678.html","posts/9daba997.html","posts/9d311ad9.html","posts/e6e16d2.html","posts/f053e453.html","posts/ee3d720c.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};