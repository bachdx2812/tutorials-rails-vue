<template>
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
      <UserItem v-for="user in usersList" :key="user.id" :user="user"></UserItem>
    </tbody>
  </table>
</template>

<script>
import UserItem from "../../components/Users/UserItem";

export default {
  components: {
    UserItem
  },
  data: function() {
    return {
      usersList: []
    };
  },
  created: function() {
    this.fetchUsersList();
  },
  mounted: function() {},
  methods: {
    fetchUsersList: async function() {
      const result = await this.axios.get("users.json");

      console.log(result);
      this.usersList = result.data;
    }
  }
};
</script>

<style>
</style>