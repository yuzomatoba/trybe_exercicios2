const { Comment } = require('../models');

const getCommentsByAccountId = async (req, res) => {
  try{
    const CommentList = await Comment.findAll({
      where: { accountId: req.params.id },
    });

    if (  !CommentList.length) {
      return res.status(404).send({ message: 'No registered comment' });
    }
    return res.status(200).json(CommentList[0]);
  } catch (error) {
    res.status(500).json({ message: 'Something bad happened' });
  }
};

module.exports = {
  getCommentsByAccountId,
};