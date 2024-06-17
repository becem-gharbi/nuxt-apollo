import { defineNuxtPlugin } from '#imports'

export default defineNuxtPlugin({
  enforce: 'pre',
  hooks: {
    'apollo:http-auth': (args) => {
      args.token = 'pT9Jm6MG5ajHjH1VQFtXLJYI1-8hsTO5'
    },
    'apollo:ws-auth': (args) => {
      args.params = {
        access_token: 'pT9Jm6MG5ajHjH1VQFtXLJYI1-8hsTO5',
      }
    },
  },
})
