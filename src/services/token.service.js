const Token = require("../models/token.model");

/*
i think u don't need callback if u use await.
it will return the deleted doc.
if u must need to handle the error,
u should handle in this file directly.
else, handle in middleware. the error will pass to the middleware.
*/

exports.addToken = async (token) => {
  const tokenDoc = new Token(token);
  return await tokenDoc.save();
};

//don't return if u don't use the deleted token
exports.removeToken = async (id) => {
  const doc = await Token.findByIdAndRemove(id);
  console.log("Deleted item is : " + doc);
};
//use shorthand
exports.deleteTokenbyUserId = async (user_id) => {
  await Token.deleteMany({ user_id });
};

exports.deleteTokenbyToken = async (token) => {
  await Token.findOneAndDelete({ token });
  console.log("Deleted item is : " + doc);
};
exports.getTokenbyToken = async (token) => {
  await Token.findOne({ token });
};
exports.getAllTokens = async () => {
  await Token.find();
};
