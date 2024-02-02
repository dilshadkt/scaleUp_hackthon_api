const express = require('express')
const app =  express()
const mongoose = require('mongoose')


mongoose.connect().then(() =>  console.log("connection is good"))


app.listen()
