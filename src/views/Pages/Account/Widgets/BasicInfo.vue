<template>
  <v-card class="card-shadow border-radius-xl mt-6" id="basic">
    <div class="px-6 py-6">
      <h5 class="text-h5 font-weight-bold text-typo">Basic Info</h5>
    </div>
    <div class="px-6 pb-6 pt-0">
      <v-row>
        <v-col cols="12">
          <label class="text-sm text-body ms-1">Image Profile</label>
          <dropzone v-model="fileSingle"></dropzone>
        </v-col>
        <v-col cols="6">
          <v-text-field
            color="#e91e63"
            label="First Name"
            placeholder="Alex"
            :value="this.user.firstName"
            class="font-size-input input-style"
          >
          </v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            color="#e91e63"
            label="Last Name"
            placeholder="Thompson"
            :value="this.user.lastName"
            class="font-size-input input-style"
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row class="mt-0">
        <v-col sm="4" cols="12">
          <label class="text-sm text-body">I'm</label>
          <v-select
            :items="gender"
            label="Male"
            color="#e91e63"
            class="font-size-input input-style"
            single-line
            height="36"
          >
          </v-select>
        </v-col>
        <v-col sm="8">
          <v-row>
            <v-col cols="5">
              <label class="text-sm text-body">Birth Date</label>
              <v-select
                :items="months"
                label="February"
                color="#e91e63"
                class="font-size-input input-style"
                single-line
                height="36"
              >
              </v-select>
            </v-col>
            <v-col sm="4" cols="3">
              <v-select
                :items="days"
                label="1"
                color="#e91e63"
                class="font-size-input input-style mt-7"
                single-line
                height="36"
              >
              </v-select>
            </v-col>
            <v-col sm="3" cols="4">
              <v-select
                :items="years"
                label="2022"
                color="#e91e63"
                class="font-size-input input-style mt-7"
                single-line
                height="36"
              >
              </v-select>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" class="py-0">
          <v-text-field
            color="#e91e63"
            label="Email"
            placeholder="example@email.com"
            :value="this.user.email"
            class="font-size-input input-style"
          >
          </v-text-field>
        </v-col>
        <v-col cols="6" class="py-0">
          <v-text-field
            color="#e91e63"
            label="Confirmation Email"
            placeholder="example@email.com"
            class="font-size-input input-style"
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" class="py-0">
          <v-text-field
            color="#e91e63"
            label="Your Location"
            placeholder="Sydney, A"
            class="font-size-input input-style"
          >
          </v-text-field>
        </v-col>
        <v-col cols="6" class="py-0">
          <v-text-field
            color="#e91e63"
            label="Phone Number"
            placeholder="+40 735 631 620"
            class="font-size-input input-style"
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" class="pb-0">
          <label class="text-sm text-body">Language</label>
          <v-select
            :items="languages"
            label="English"
            color="#e91e63"
            class="font-size-input input-style"
            single-line
            height="36"
          >
          </v-select>
        </v-col>
        <v-col cols="6">
          <label class="text-sm text-body">Skills</label>
          <v-select
            :items="skills"
            color="#e91e63"
            class="font-size-input input-style"
            single-line
            chips
            multiple
            height="36"
          >
          </v-select>
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>
<script>
import UserService from "@/services/user.service";
import Dropzone from "@/views/Ecommerce/Products/Widgets/Dropzone.vue";

export default {
  name: "basic-info",
  components: { Dropzone },
  props: {
    options: {
      type: Object,
      default: () => ({}),
    },
    value: [String, Object, Array],
    url: {
      type: String,
      default: "http://",
    },
    multiple: Boolean,
    previewClasses: [String, Object, Array],
  },
  model: {
    prop: "value",
    event: "change",
  },
  data() {
    return {
      fileSingle: [],
      gender: ["Female", "Male"],
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "Octomber",
        "November",
        "December",
      ],
      days: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
        "31",
      ],
      years: ["2021", "2020", "2019"],
      languages: ["English", "French", "Spanish"],
      skills: ["vuejs", "angular", "react"],
      user: [],
      currentFile: null,
      files: [],
      showList: false,
    };
  },
  methods: {
    async initDropzone() {
      let Dropzone = await import("dropzone");
      Dropzone = Dropzone.default || Dropzone;
      Dropzone.autoDiscover = false;
      let preview = this.multiple
        ? this.$refs.previewMultiple
        : this.$refs.previewSingle;
      let self = this;
      let finalOptions = {
        ...this.options,
        url: this.url,
        thumbnailWidth: null,
        thumbnailHeight: null,
        previewsContainer: preview,
        previewTemplate: preview.innerHTML,
        maxFiles: !this.multiple ? 1 : null,
        acceptedFiles: !this.multiple ? "image/*" : null,
        init: function () {
          this.on("addedfile", function (file) {
            if (!self.multiple && self.currentFile) {
              // this.removeFile(this.currentFile);
            }
            self.currentFile = file;
          });
        },
      };
      this.dropzone = new Dropzone(this.$el, finalOptions);
      preview.innerHTML = "";
      let evtList = [
        "drop",
        "dragstart",
        "dragend",
        "dragenter",
        "dragover",
        "addedfile",
        "removedfile",
        "thumbnail",
        "error",
        "processing",
        "uploadprogress",
        "sending",
        "success",
        "complete",
        "canceled",
        "maxfilesreached",
        "maxfilesexceeded",
        "processingmultiple",
        "sendingmultiple",
        "successmultiple",
        "completemultiple",
        "canceledmultiple",
        "totaluploadprogress",
        "reset",
        "queuecomplete",
      ];
      evtList.forEach((evt) => {
        this.dropzone.on(evt, (data) => {
          this.$emit(evt, data);
          if (evt === "addedfile") {
            this.files.push(data);
            this.$emit("change", this.files);
          } else if (evt === "removedfile") {
            let index = this.files.findIndex(
              (f) => f.upload.uuid === data.upload.uuid
            );
            if (index !== -1) {
              this.files.splice(index, 1);
            }
            this.$emit("change", this.files);
          }
        });
      });
    },
  },
  mounted() {
    this.initDropzone();
    UserService.getProfile().then(
      (response) => {
        this.user = response.data;
      },
      (error) => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
  },
};
</script>
