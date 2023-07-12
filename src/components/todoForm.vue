<template>
  <div class="card m-3">
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
        <div class="form-group">
          <label>Due Date</label>
          <Field name="dueDate" type="date" class="form-control" :class="{ 'is-invalid': errors.dueDate }" />
          <div class="invalid-feedback">{{ errors.dueDate }}</div>
        </div>
        <div class="form-group">
          <label>Priority</label>
          <Field name="priority" as="select" class="form-control" :class="{ 'is-invalid': errors.priority }">
            <option value=""></option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </Field>
          <div class="invalid-feedback">{{ errors.priority }}</div>
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
  description: Yup.string().required('Description is required'),
  dueDate: Yup.string()
    .required('Due Date is required')
    .matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/, 'Due Date must be a valid date in the format YYYY-MM-DD'),
  priority: Yup.string().required('Priority is required')
})

function onSubmit (values) {
  // Process form submission
  // emit add functionality values
  emit('add', values)
}
</script>
