<template>
  <tr>
    <th scope="row">{{ user.id}}</th>
    <td>{{ user.name }}</td>
    <td>{{ user.description }}</td>
    <td>{{ user.gender }}</td>
    <td>{{ user.school }}</td>
    <td>
      <button type="button" class="btn btn-primary" @click="editUser()">Edit</button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    editUser: function() {
      this.$emit('edit-user', this.user.id);
    }
  }
};
</script>

<style>
</style>