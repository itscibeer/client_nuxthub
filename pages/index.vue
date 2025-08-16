<script setup lang="ts">
import axios from 'axios'
import { useAsyncData, useRuntimeConfig } from 'nuxt/app' // ✅ เพิ่ม useRuntimeConfig

interface User {
  id: number
  labels: string
  email: string
}

const { data, pending, error } = useAsyncData<User[]>(
  'get-users',
  async () => {
    const config = useRuntimeConfig()
    const res = await axios.get(`${config.public.apiBase}/api/user`)
    return res.data
  }
)


console.log('data', data?.value)
</script>


<template>
  <div>
    <h1>Users</h1>

    <div v-if="pending">Loading...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <ul v-else>
      <li v-for="user in data" :key="user.id">
        {{ user.labels }} -- {{ user.email }}
      </li>
    </ul>
  </div>
</template>
