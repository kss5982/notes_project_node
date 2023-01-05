const bcrypt = require("bcrypt");
const usersRouter = require("express").Router();
const User = require("../models/user");
usersRouter.get("/", async (request, response) => {
  const users = await User.find({});
  response.json(users);
});

notesRouter.post("/", async (request, response, next) => {
  const body = request.body;

  const user = await User.findById(body.userId);

  const note = new Note({
    content: body.content,
    important: body.important === undefined ? false : body.important,
    date: new Date(),
    user: user._id,
  });

  const savedNote = await note.save();
  user.notes = user.notes.concat(savedNote._id);
  await user.save();

  response.json(savedNote);
});

module.exports = usersRouter;
