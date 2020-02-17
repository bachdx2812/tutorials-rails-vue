<template>
  <div>
    <Search v-on:per-page-changed="perPageChanged"></Search>

    <Paging :meta="meta" v-on:change-page="pageChanged"></Paging>

    <b-button v-b-modal.modal-1>Create New</b-button>
    <Modal
      v-on:new-user-created="newUserCreated"
      :user-id="editingUserId"
      v-on:user-updated="userUpdated"
    ></Modal>

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
        <Item v-for="user in usersList" :key="user.id" :user="user" v-on:edit-user="editUser"></Item>
      </tbody>
    </table>
  </div>
</template>

<script>
import Item from "../../components/Users/Item";
import Search from "../../components/Users/Search";

import UserServices from '../../api/users'

export default {
  components: {
    Item,
    Search,
    Paging: () => import("../../components/Share/Paging"),
    Modal: () => import("../../components/Users/Modal")
  },
  data: function() {
    return {
      usersList: [],
      page: 1,
      perPage: 20,
      meta: {},
      editingUserId: null
    };
  },
  created: function() {
    this.fetchUsersList();
  },
  mounted: function() {},
  methods: {
    fetchUsersList: async function() {
      let params = {
        page: this.page,
        per_page: this.perPage
      };

      const result = await UserServices.getUsers(params);

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
    },
    editUser: function(userId) {
      this.editingUserId = userId;
      this.$bvModal.show("modal-1");
    },
    userUpdated: function(user) {
      let updatedIndex = this.usersList.findIndex(u => u.id === user.id);

      this.$set(this.usersList, updatedIndex, user);
    },
    perPageChanged: function(perPage) {
      this.perPage = perPage;
      this.page = 1;
      this.fetchUsersList();
    }
  },
};
</script>

<style>
</style>