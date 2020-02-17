<template>
  <div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <label class="input-group-text" for="inputGroupSelect01">Per Page:</label>
      </div>
      <select v-model="perPage">
        <option v-for="option in perPageOptions" :key="option">{{option}}</option>
      </select>
    </div>

    <Paging :meta="meta" v-on:change-page="pageChanged"></Paging>
    <b-button v-b-modal.modal-1>Create New</b-button>
    <UserModal v-on:new-user-created="newUserCreated"></UserModal>

    <table class="table">
      <thead id="test">
        <tr>
          <th scope="col">#ID</th>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Gender</th>
          <th scope="col">School</th>
        </tr>
      </thead>
      <tbody>
        <!-- 20 items per page -->
        <UserItem v-for="user in usersList" :key="user.id" :user="user"></UserItem>
      </tbody>
    </table>
  </div>
</template>

<script>
import UserItem from "../../components/Users/UserItem";

const perPageOptions = [10, 20, 30, 40, 50, 60];

export default {
  components: {
    UserItem,
    Paging: () => import("../../components/Share/Paging"),
    UserModal: () => import("../../components/Users/UserModal")
  },
  data: function() {
    return {
      usersList: [],
      page: 1,
      perPage: 20,
      meta: {}
    };
  },
  created: function() {
    this.initConstants();
    this.fetchUsersList();
  },
  mounted: function() {},
  methods: {
    initConstants: function() {
      this.perPageOptions = perPageOptions;
      // so on
    },
    fetchUsersList: async function() {
      let params = {
        page: this.page,
        per_page: this.perPage
      };
      const result = await this.$axios.get("users.json", {
        params: params
      });

      this.usersList = result.data.users;
      // this.meta = result.data.meta;

      this.meta = Object.assign({}, this.meta, result.data.meta);
      this.page = result.data.meta.page;
    },
    pageChanged: function(page) {
      this.page = page;
      this.fetchUsersList();
    },
    newUserCreated: function(user) {
      this.usersList.unshift(user);
    }
  },
  watch: {
    perPage: function() {
      this.page = 1;
      this.fetchUsersList();
    }
  }
};
</script>

<style>
</style>