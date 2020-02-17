<template>
  <div>
    <b-modal id="modal-1" title="BootstrapVue">
      <p class="my-4">New User</p>
      <form>
        <div class="form-group">
          <label>Name</label>
          <input type="text" class="form-control" v-model="user.name" />
        </div>

        <div class="form-group">
          <label>Description</label>
          <input type="text" class="form-control" v-model="user.description" />
        </div>

        <div class="form-group">
          <label>Gender</label>
          <div class="form-check">
            <input class="form-check-input" type="radio" value="male" v-model="user.gender" />
            <label class="form-check-label" for="exampleRadios1">Male</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" value="female" v-model="user.gender" />
            <label class="form-check-label" for="exampleRadios2">Female</label>
          </div>
        </div>

        <div class="form-group">
          <label>School</label>
          <div class="form-check">
            <v-select :options="schoolOptions" label="name" v-model="user.school"></v-select>
            <label class="form-check-label" for="exampleRadios1">Male</label>
          </div>
        </div>

        <button type="submit" class="btn btn-primary" @click.prevent="submit()">Submit</button>
      </form>
    </b-modal>
  </div>
</template>

<script>
import UserServices from "../../api/users";

export default {
  props: {
    userId: {
      type: Number,
      required: false
    }
  },
  data: function() {
    return {
      user: {
        name: "",
        description: "",
        gender: 1,
        school: {}
      },
      editing: false,
      schoolOptions: []
    };
  },
  created: function() {
    this.fetchSchoolsList();
  },
  methods: {
    fetchSchoolsList: async function() {
      const result = await this.$axios.get("/schools.json");
      this.schoolOptions = result.data;
    },
    submit: async function() {
      let endpoint, method;

      const userParams = this.user;
      userParams.school_id = this.user.school.id;

      if (this.editing) {
        const result = await UserServices.updateUser(this.user.id, {
          user: userParams
        });
        this.$emit("user-updated", result.data);
      } else {
        const result = await UserServices.createUser({ user: userParams });
        this.$emit("new-user-created", result.data);
      }

      this.$bvModal.hide("modal-1");
    }
  },
  watch: {
    userId: async function() {
      const result = await this.$axios.get(`/users/${this.userId}.json`);
      this.user = result.data;
      this.editing = true;
    }
  }
};
</script>

<style>
</style>