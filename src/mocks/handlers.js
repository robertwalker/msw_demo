// src/mocks/handlers.js
import { rest } from "msw"
import { userServiceHost } from "../services/UserService"

export const handlers = [
  rest.post(`${userServiceHost}/login`, (req, res, ctx) => {
    // Persist user"s authentication in the session
    sessionStorage.setItem("is-authenticated", "true")

    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json({
        authenticated: true,
      }),
    )
  }),

  rest.get(`${userServiceHost}/user/:id`, (req, res, ctx) => {
    // Check if the user is authenticated in this session
    const isAuthenticated = sessionStorage.getItem("is-authenticated")

    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: "Not authorized",
        }),
      )
    }

    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        id: 1,
        username: "admin",
        first_name: "John",
        last_name: "Smith",
        phones: [
          {
            label: "Work",
            number: "(555) 555-1234",
          },
          {
            label: "Mobile",
            number: "(555) 555-2345",
          },
        ],
        emails: [
          {
            label: "Home",
            email: "john.smith@gmail.com",
          },
          {
            label: "Work",
            email: "john_smith@mapple.com",
          },
        ],
      }),
    )
  }),
]
