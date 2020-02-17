<template>
  <tr>
    <th scope="row">{{ user.id}}</th>
    <td>{{ user.name }}</td>
    <td>{{ user.description }}</td>
    <td>{{ user.gender }}</td>
    <td>{{ user.school }}</td>
  </tr>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
</style>