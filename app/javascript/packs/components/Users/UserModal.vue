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

        <button type="submit" class="btn btn-primary" @click.prevent="submit()">Submit</button>
      </form>
    </b-modal>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      user: {
        name: "",
        description: "",
        gender: 1
      }
    };
  },
  methods: {
    submit: async function() {
      const result = await this.$axios.post("users.json", {
        user: this.user 
      });

      this.$emit('new-user-created', result.data);
      this.$bvModal.hide('modal-1');
    }
  }
};
</script>

<style>
</style>