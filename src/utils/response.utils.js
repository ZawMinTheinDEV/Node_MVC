const { ACCESS_DENIED } = require("../configs/message.config");

exports.successRes = (res, message, data) => {
  res.status(200).json({
    status: "success",
    message,
    data,
  });
};
exports.badRequest = (res, message, data) => {
  res.status(400).json({
    status: "error",
    message,
    data,
  });
};
exports.accessDeniedRes = (res) => {
  res.status(401).json({
    status: "error",
    message: ACCESS_DENIED,
  });
};

/*
utils folder is use for utility function you have to use.
eg: response style, DTO, date time funcions
*/

/*
for success response, I like to response as
{
    status: "success",
    message: "some success message", //If message exist
    data: {
        item: {
            ...
        }
    } //If data exist
}
*/

/*
for error response, If error is like 40.. or 50...
add that status code as well
for application error response...
{
    status: "error",
    message: "some error message"
}
*/
