
const getUserContent = (req, res) => {
    res.status(200).send("User Content");
};

const userController = {
    getUserContent: getUserContent
}

module.exports = userController;