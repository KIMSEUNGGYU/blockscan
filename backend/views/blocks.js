const viewBlocks = blocks => {
  return {
    code: 200,
    status: 'success',
    message: 'block list response - List of pn number blocks',
    result: {
      blocks,
    },
    total: blocks.length,
  };
};

module.exports = {
  viewBlocks,
};
