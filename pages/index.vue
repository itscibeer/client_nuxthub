<script setup lang="ts">
import axios from 'axios'
import { useAsyncData, useRuntimeConfig } from 'nuxt/app' // ✅ เพิ่ม useRuntimeConfig

interface User {
  id: number
  labels: string
  email: string
}

const config = useRuntimeConfig()
const { data, pending, error } = useAsyncData<User[]>(
  'get-users',
  async () => {
    
    const res = await axios.get(`/api/user`)

    return res.data
  }
)

console.log('data', data?.value)
console.log('config.public.apiBase', config.public.apiBase)
</script>


<template>
  <div>
    <h1>Users Claude</h1>

    <div v-if="pending">Loading...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <ul v-else>
      <li v-for="user in data" :key="user.id">
        {{ user.labels }} -- {{ user.email }}
      </li>
    </ul>
  </div>
</template>
