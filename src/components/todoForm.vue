<template>
  <div class="card m-3 todo-form">
    <h5 class="card-header">Edit Todo Item</h5>
    <div class="card-body">
      <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
        <div class="form-group">
          <label>Title</label>
          <Field name="title" type="text" class="form-control" :class="{ 'is-invalid': errors.title }" v-model="form.title" />
          <div class="invalid-feedback">{{ errors.title }}</div>
        </div>
        <div class="form-group">
          <label>Description</label>
          <Field name="description" type="text" class="form-control" :class="{ 'is-invalid': errors.description }" v-model="form.description" />
          <div class="invalid-feedback">{{ errors.description }}</div>
        </div>
        <div class="form-group">
          <label>Due Date</label>
          <Field name="dueDate" type="date" class="form-control" :class="{ 'is-invalid': errors.dueDate }" v-model="form.dueDate" />
          <div class="invalid-feedback">{{ errors.dueDate }}</div>
        </div>
        <div class="form-group">
          <label>Priority</label>
          <Field name="priority" as="select" class="form-control" :class="{ 'is-invalid': errors.priority }" v-model="form.priority">
            <option value=""></option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </Field>
          <div class="invalid-feedback">{{ errors.priority }}</div>
        </div>
        <div class="form-group mt-3">
          <button type="submit" class="btn btn-primary mr-1">Save</button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script setup>
import { Form, Field } from 'vee-validate'
import * as Yup from 'yup'

import { defineProps, defineEmits } from 'vue'

const emit = defineEmits(['add'])

const props = defineProps({
  initialValues: {
    type: Object,
    required: false
  }
})

const form = {
  title: props.initialValues.title || '',
  description: props.initialValues.description || '',
  dueDate: props.initialValues.dueDate || '',
  priority: props.initialValues.priority || ''
}

const schema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
  dueDate: Yup.string()
    .required('Due Date is required')
    .matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/, 'Due Date must be a valid date in the format YYYY-MM-DD'),
  priority: Yup.string().required('Priority is required')
})

// const { handleSubmit } = useForm({
//   validationSchema: schema,
//   initialValues: {
//     title: props?.initialValues.title || '',
//     description: props?.initialValues.description || '',
//     dueDate: props?.initialValues.dueDate || '',
//     priority: props?.initialValues.priority || ''
//   }
// })

function onSubmit (values) {
  // اجرای عملیات ویرایش
  emit('add', values)
}
</script>

<style lang="scss" scoped>
.card {
  width: 90%;
}
.todo-form {
  .form-group {
    width: 100% !important;
  }
}
</style>
