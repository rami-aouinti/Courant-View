<template>
  <v-container fluid class="py-6">
    <div
      class="
        min-height-100
        border-radius-xl
        overflow-hidden
        position-relative
        mx-3
      "
      :style="`background-image: url('https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'); background-position: 50%; background-size: cover;`"
    >
      <span class="mask bg-gradient-primary opacity-6"></span>
    </div>
    <v-card class="shadow px-4 py-4 mx-9 border-radius-xl mt-n16">
      <div class="d-flex justify-content-center">
        <h1>Quiz</h1>
      </div>
      <v-divider></v-divider>
      <v-row>
        <v-col lg="3" cols="12">
          <v-card class="h-100">
            <div class="px-4 pt-4">
              <h6 class="mb-0 text-h6 text-typo">Categories</h6>
            </div>
            <div class="px-4 py-4">
              <v-list>
                <v-list-item-group class="border-radius-sm">
                  <v-list-item
                    :ripple="false"
                    v-for="conversation in categories"
                    :key="conversation.id"
                    @click="addCategory(conversation.id)"
                    class="px-0 border-radius-sm mb-2"
                  >
                    <v-avatar
                      width="48"
                      height="48"
                      class="shadow border-radius-lg me-4"
                    >
                      <v-icon class="material-icons-round" size="36"
                        >insights</v-icon
                      >
                    </v-avatar>
                    <v-list-item-content>
                      <div class="d-flex align-center">
                        <div>
                          <h6
                            class="
                              mb-0
                              text-sm text-sm text-typo
                              font-weight-bold
                            "
                          >
                            {{ conversation.longname }}
                          </h6>
                        </div>
                      </div>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </div>
            <hr class="vertical dark" />
          </v-card>
        </v-col>
        <v-col lg="6" md="6" cols="12" class="position-relative">
          <div v-if="showScore">
            <h1>You Scored {{ score }} of {{ questions.length }}</h1>
          </div>
          <div v-else>
            <span v-if="!startQuiz">
              <v-card-text>
                This is an simple OnePage Application Written in Vue2. You can
                integrate it anywhere in your vueJS application. It has a simple
                timer with loading animations. Since it is open source feel free
                to contribute to this simple quiz Application here:
                <a
                  target="_blank"
                  href="https://github.com/arpan45/simple-quiz-vue"
                >
                  Github Repo
                </a>
              </v-card-text>
            </span>
            <span v-else>
              <span v-if="startChoice">
                <v-row>
                  <template v-for="i in 12">
                    <v-col md="4" cols="3">
                      <v-card
                        class="card-shadow border-radius-xl text-center pa-5"
                      >
                        <v-btn
                          elevation="0"
                          :ripple="false"
                          height="43"
                          class="
                            font-weight-bold
                            text-uppercase
                            btn-primary
                            bg-gradient-primary
                            py-2
                            px-6
                            me-2
                            text-xs
                          "
                          @click="startQuizFunc(i)"
                        >
                          Level {{ i }}</v-btn
                        >
                      </v-card>
                    </v-col>
                  </template>
                </v-row>
              </span>
              <span v-else>
                <div class="card-header-padding card-border-bottom">
                  <p class="font-weight-600 text-h3 text-typo mb-0">
                    Question No.{{ currentQuestion + 1 }} of
                    {{ questions.length }}
                  </p>
                </div>
                <v-card-text class="card-padding">
                  <v-card-text>
                    {{ questions[currentQuestion].questionText }}
                  </v-card-text>
                  <div class="answer-section">
                    <div class="mt-md-12">
                      <v-btn
                        block
                        :key="index"
                        v-for="(option, index) in questions[currentQuestion]
                          .answerOptions"
                        @click="handleAnswerClick(option.isCorrect)"
                        class="ans-option-btn"
                        variant="outlined"
                        >{{ option.answerText }}</v-btn
                      >
                    </div>
                  </div>
                </v-card-text>
                <v-progress-linear
                  :value="countDown"
                  height="6"
                  rounded
                  background-color="#e9ecef"
                  color="#e53935"
                  :max="30"
                ></v-progress-linear>
                <div class="d-flex justify-content-center">
                  <strong>{{ countDown }} </strong>
                </div>
              </span>
            </span>
          </div>
          <hr class="vertical dark" />
        </v-col>
        <v-col lg="3" cols="12">
          <v-card class="h-100">
            <div class="px-4 pt-4">
              <h6 class="mb-0 text-h6 text-typo">High Scores</h6>
            </div>
            <div class="px-4 py-4">
              <v-list>
                <v-list-item-group class="border-radius-sm">
                  <v-list-item
                    :ripple="false"
                    v-for="conversation in scores"
                    :key="conversation.id"
                    class="px-0 border-radius-sm mb-2"
                  >
                    <v-avatar
                      width="48"
                      height="48"
                      class="shadow border-radius-lg me-4"
                    >
                      <img
                        :src="conversation.photo"
                        alt="Avatar"
                        class="border-radius-lg"
                      />
                    </v-avatar>
                    <v-list-item-content>
                      <div class="d-flex align-center">
                        <div>
                          <h6
                            class="
                              mb-0
                              text-sm text-sm text-typo
                              font-weight-bold
                            "
                          >
                            {{ conversation.username }}
                          </h6>
                          <p class="mb-0 text-xs text-body font-weight-light">
                            Level {{ conversation.level }}
                          </p>
                        </div>
                        <div class="ms-auto">
                          <v-btn
                            :ripple="false"
                            small
                            text
                            width="auto"
                            class="
                              pe-4
                              ps-0
                              mb-0
                              text-primary
                              font-weight-bolder
                            "
                          >
                            {{ conversation.score }} points
                          </v-btn>
                        </div>
                      </div>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <div class="d-flex justify-content-center" v-if="!startQuiz">
        <v-btn @click="choiceLevel()">Choice Level</v-btn>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import QuizService from "@/services/quiz.service";
import AdminService from "@/services/admin.service";

export default {
  data() {
    return {
      conversations: [
        {
          avatar: require("@/assets/img/kal-visuals-square.jpg"),
          user: "Sophie B.",
          message: "Hi! I need more information..",
        },
        {
          avatar: require("@/assets/img/marie.jpg"),
          user: "Anne Marie",
          message: "Awesome work, can you..",
        },
        {
          avatar: require("@/assets/img/ivana-square.jpg"),
          user: "Ivanna",
          message: "About files I can..",
        },
        {
          avatar: require("@/assets/img/team-4.jpg"),
          user: "Peterson",
          message: "Have a great afternoon..",
        },
        {
          avatar: require("@/assets/img/team-3.jpg"),
          user: "Nick Daniel",
          message: "Hi! I need more information..",
        },
      ],
      stats: [
        {
          text: "Sales",
          value: "$230,220",
          growth: "+55%",
        },
        {
          text: "Customers",
          value: "3.200",
          growth: "+12%",
        },
        {
          text: "Avg. Revenue",
          value: "$1.200",
          growth: "+$213",
        },
      ],
      countries: [
        {
          avatar: require("@/assets/img/icons/flags/US.png"),
          country: "United States",
          sales: "2.500",
          bounce: "29.9%",
        },
        {
          avatar: require("@/assets/img/icons/flags/DE.png"),
          country: "Germany",
          sales: "3.900",
          bounce: "40.22%",
        },
        {
          avatar: require("@/assets/img/icons/flags/GB.png"),
          country: "Great Britain",
          sales: "1.400",
          bounce: "23.44%",
        },
        {
          avatar: require("@/assets/img/icons/flags/BR.png"),
          country: "Brasil",
          sales: "562",
          bounce: "32.14%",
        },
        {
          avatar: require("@/assets/img/icons/flags/AU.png"),
          country: "Australia",
          sales: "400",
          bounce: "56.83%",
        },
      ],
      products: [
        {
          product: "Nike v22 Running",
          orders: "8.232",
          imgSrc:
            "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/blue-shoe.jpg",
          value: "$130.992",
          ads: "$9.500",
          refunds: 13,
        },
        {
          product: "Business Kit (Mug + Notebook)",
          orders: "12.821",
          imgSrc:
            "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/black-mug.jpg",
          value: "$80.250",
          ads: "$4.200",
          refunds: 40,
        },
        {
          product: "Black Chair",
          orders: "2.421",
          imgSrc:
            "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/black-chair.jpg",
          value: "$40.600",
          ads: "$9.430",
          refunds: 54,
        },
        {
          product: "Wireless Charger",
          orders: "5.921",
          imgSrc:
            "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/bang-sound.jpg",
          value: "$91.300",
          ads: "$7.364",
          refunds: 5,
        },
        {
          product: "Mountain Trip Kit (Camera + Backpack)",
          orders: "921",
          imgSrc:
            "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/ecommerce/photo-tools.jpg",
          value: "$140.925",
          ads: "$20.531",
          refunds: 121,
        },
      ],
      selectedItem: 0,
      items: [
        { text: "My Files", icon: "material-icons-round" },
        { text: "Shared", icon: "mdi-account-multiple" },
        { text: "Starred", icon: "mdi-star" },
        { text: "Recent", icon: "mdi-history" },
        { text: "Offline", icon: "mdi-check-circle" },
        { text: "Uploads", icon: "mdi-upload" },
        { text: "Backups", icon: "mdi-cloud-upload" },
      ],
      currentQuestion: 0,
      showScore: false,
      score: 0,
      countDown: 30,
      timer: null,
      startQuiz: false,
      startChoice: false,
      questions: [],
      result: [],
      categories: [],
      scores: [],
      categoryId: "",
    };
  },

  methods: {
    addCategory(i) {
      this.categoryId = i;
    },
    choiceLevel() {
      this.startChoice = true;
      this.startQuiz = true;
    },
    startQuizFunc(i) {
      QuizService.getQuestions(this.categoryId).then(
        (response) => {
          this.questions = response.data
            .filter(checkAdult)
            .sort(() => Math.random() - Math.random())
            .slice(0, 10);
        },
        (error) => {
          this.content =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        }
      );

      function checkAdult(question) {
        return question.complicated === i;
      }

      this.startChoice = false;
      this.countDownTimer();
    },
    handleAnswerClick(isCorrect) {
      clearTimeout(this.timer);
      let nextQuestion = this.currentQuestion + 1;
      if (isCorrect) {
        this.score = this.score + 1;
      }
      if (nextQuestion < this.questions.length) {
        this.currentQuestion = nextQuestion;
        // this.$store.state.questionAttended = this.currentQuestion;
        // localStorage.setItem('qattended', this.currentQuestion)

        this.countDown = 30;
        this.countDownTimer();
      } else {
        //save data
        var scoreObject = {
          score: this.score,
          level: Math.round(this.score) - 1,
        };
        QuizService.addScore(scoreObject).then(
          (response) => {
            console.log(response.data);
          },
          (error) => {
            this.content =
              (error.response && error.response.data) ||
              error.message ||
              error.toString();
          }
        );
        // localStorage.removeItem('qattended')
        this.showScore = true;
        // localStorage.setItem('testComplete',this.showScore)
      }
    },
    countDownTimer() {
      if (this.countDown > 0) {
        this.timer = setTimeout(() => {
          this.countDown -= 1;
          this.countDownTimer();
        }, 1000);
      } else {
        this.handleAnswerClick(false);
      }
    },
  },
  mounted() {
    AdminService.getItems("category").then(
      (response) => {
        this.categories = response.data;
      },
      (error) => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
    QuizService.getScores().then(
      (response) => {
        this.scores = response.data;
      },
      (error) => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
  },

  created() {
    //  alert(this.$store.state.questionAttended)
    //    this.showScore = localStorage.getItem('testComplete') || false
    //    this.currentQuestion = localStorage.getItem('qattended') || 0
    //    this.countDownTimer()
    //    this.fetchQuiz()
  },
};
</script>
