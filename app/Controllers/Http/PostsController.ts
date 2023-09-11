// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import axios from 'axios'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PostsController {
    public async index(ctx: HttpContextContract) {
        return [
          {
            id: 1,
            title: 'Hello world',
          },
          {
            id: 2,
            title: 'Hello universe',
          },
        ]
    }

    public async getUsers(ctx: HttpContextContract) {
      try {
          const response = await axios.get('https://api.github.com/users/github')
          // Assuming the GitHub API returns data in JSON format.
          const userData = response.data

          return userData
      } catch (error) {
          // Handle errors here (e.g., log them, return an error response, etc.)
          console.error('Error fetching GitHub user data:', error)
          return ctx.response.status(500).send('Error fetching GitHub user data')
      }
  }
}
