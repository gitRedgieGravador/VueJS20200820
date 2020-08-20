new Vue({
  el: "#app",
  vuetify: new Vuetify(),
  data() {
    return {
      sms: "this is the message."
    };
  },
  created() {
    return (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "//connect.facebook.com/en_US/messenger.Extensions.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "Messenger");
  }
});

/*
new Vue({
  router,
  created() {
    return (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "//connect.facebook.com/en_US/messenger.Extensions.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "Messenger");
  }
}).$mount("#app");

*/
