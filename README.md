# Limitless

### Creating an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.

<hr>

## Description

### The purpose of this project was to build a functional, NoSQL database utilizing MongoDB, Mongoose, and Express. In addition to this I created a functional API that makes requests to this database. With the routes and controllers set up in this repo, users can create usernames, share their thoughts, react to friends’ thoughts, and create a friend list.

### The user can make GET, POST, PUT, and DELETE requests to modify the database. I have attached a video demonstration for further information.

<hr>

## Instillation

### - Clone the repository

### - "git" clone : git@github.com:mertcetnn/Limitless.git

### - run with "npm start"

<hr>

## Usage

## GET/ POST routes:

### http://localhost:3001/api/users

### http://localhost:3001/api/thoughts

## PUT/DELETE routes:

### http://localhost:3001/api/users/:id

### http://localhost:3001/api/thoughts/:id

## POST/ DELETE routes:

### http://localhost:3001/api/users/:id/friends/:friendId

### http://localhost:3001/api/thoughts/:id/reactions

### The route above is used to POST a new reaction. If you wish to DELETE a certain reaction you can do so by adding an /id at the end of the link.

<hr>

# QUESTIONS

## Here is a link to my github:

### https://github.com/mertcetnn/Limitless

## Email me at:

### mert.cetnn@gmail.com for additional questions
