# KeystoneJS Starter Template

You've created a KeystoneJS project! This project contains a simple list of users and an admin application (`localhost:3000/admin`) with basic authentication.

## Running the Project.

To run this project first run `npm install`. Note: If you generated this project via the Keystone cli step this has been done for you \\o/.

Once running, the Keystone Admin UI is reachable via `localhost:3000/admin`.

## Next steps

This example has no front-end application but you can build your own using the GraphQL API (`http://localhost:3000/admin/graphiql`).

## DB Connection String

mongodb://root:example@localhost:27017

**initial user:**
- email: admin@example.com
- password: 21e1f4f542d7

## GRAPHQL

#### Posts

```
query {
  allPosts {
    title
    status
    author {
      name
    }
    body
  }
}
```

### Users

```
query {
  allUsers {
    name
    email
  }
}
```

### User by id

```
query {
  User(where: { id: "60093547bef8b07308f9daa3" }) {
    name
    email
  }
}
```

### Create User 

```
mutation {
  createUser(data: { name: "Mike" }) {
    id
  }
}
```

### Update User 

```
mutation {
  updateUser(id: "60096b7e4e6da87ae5dbdb15", data: { name: "Simon", email:"simon.garfunk@gmail.com", isAdmin: false }) {
    id
    name
    email
    isAdmin
  }
}
```

### Todos 

```
query {
    allTodos {
        description
        isComplete
        deadline
    }
}
```

