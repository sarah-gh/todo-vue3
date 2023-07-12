<template>
    <div class="card m-3 list-form">
      <h5 class="card-header">Create New Todo Item</h5>
      <div class="card-body">
        <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
          <div class="form-group">
            <label>Title</label>
            <Field name="title" type="text" class="form-control" :class="{ 'is-invalid': errors.title }" />
            <div class="invalid-feedback">{{ errors.title }}</div>
          </div>
          <div class="form-group">
            <label>Description</label>
            <Field name="description" type="text" class="form-control" :class="{ 'is-invalid': errors.description }" />
            <div class="invalid-feedback">{{ errors.description }}</div>
          </div>
          <div class="form-group mt-3">
            <button type="submit" class="btn btn-primary mr-1">Create</button>
          </div>
        </Form>
      </div>
    </div>
  </template>

<script setup>
import { Form, Field } from 'vee-validate'
import * as Yup from 'yup'

import { defineEmits } from 'vue'
const emit = defineEmits(['add'])

const schema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required')
})

function onSubmit (values) {
  const date = new Date()
  values.date = date.toLocaleDateString()
  values.todos = []
  emit('add', values)
}
</script>

<!-- <style lang="scss">
.list-form .card-body{
  .form-group {
    width: 90%;
  }
}
</style> -->
