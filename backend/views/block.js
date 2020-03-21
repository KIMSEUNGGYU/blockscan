const viewBlock = block => {
  return {
    code: 200,
    status: 'success',
    message: 'Block Detail',
    result: {
      block,
    },
  };
};

module.exports = {
  viewBlock,
};
