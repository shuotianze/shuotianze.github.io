var posts=["posts/53c434b7.html","posts/95fbf3c4.html","posts/c63de874.html","posts/26613.html","posts/239398fe.html","posts/74ca0f44.html","posts/af13ea20.html","posts/542f557.html","posts/227c86de.html","posts/16107.html","posts/36274.html","posts/1391.html","posts/17450.html","posts/ff532bef.html","posts/9d311ad9.html","posts/e6e16d2.html","posts/40678.html","posts/ee3d720c.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"anzhiyu主题","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"技术"},{"name":"Ganzhe","link":"https://ganzhe.site/","avatar":"https://bimgs.uso.cc/ff/2023/06/anubis.cc-114-pxqjsTUmbX.webp","descr":"顺其自然，持之以恒","siteshot":"https://one.0oo0.cc/B2/img/22134123.png","color":"vip","tag":"技术"},{"name":"MDY","link":"https://www.mdy66.eu.org/","avatar":"https://pic.imgdb.cn/item/64895d391ddac507cce97bc3.webp","descr":"顺其自然，持之以恒","siteshot":"https://one.0oo0.cc/B2/img/22134123.png","color":"vip","tag":"技术"},{"name":"云梦工具箱","link":"https://download.fnmqs.work/","avatar":"https://download.fnmqs.work/html/images/favicon.ico","descr":"云梦工具箱是主要是一个主要面向Linux Debian/Ubuntu系统的便捷工具箱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"技术"},{"name":"麦克斯和雪莉的部落阁","link":"https://blog.haibara.cn/","avatar":"https://blog.haibara.cn/wp-content/uploads/2020/07/cropped-%E6%BB%91%E7%A8%BD-32x32.jpg","descr":"非常规文科生","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"技术"},{"name":"你好轩智DIY","link":"http://jc.nihaowisdom.cn/","avatar":null,"descr":"技术中心","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"技术"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","recommend":true}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };