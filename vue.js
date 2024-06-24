new Vue({
  el: "#app",
  data: {
    email: "",
    name: "",
    subject: "",
    message: "",
    isInit: true,
    isLoading: false,
    isError: false,
    isSent: false,
  },
  methods: {
    send() {
      this.isInit = false;
      this.isLoading = true;
      let msg = `Name - ${this.name}\nEmail - ${this.email}\nSubject - ${this.subject}\nMessage - ${this.message}`;

      const params = {
        chat_id: 5375657559,
        text: msg,
      };
      axios
        .get(
          "https://api.telegram.org/bot6331295141:AAEKGMVNxg5udamr2B7fpvru0asGYXzCEYY/sendMessage",
          { params }
        )
        .then(({ data }) => {
          this.isLoading = false;
          this.isSent = true;
          this.isError = false;
          console.log("donee");
        })
        .catch((err) => {
          this.isLoading = false;
          this.isSent = false;
          this.isError = true;
        });
    },
    downloadResume() {
      const resumeURL = "assets/Resume.pdf";

      const link = document.createElement("a");
      link.href = resumeURL;
      link.download = "Resume_PMM.pdf";

      link.click();
    },
  },
});
