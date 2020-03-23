const viewBlocks = (blocks, totalBlock) => {
  return {
    code: 200,
    status: 'success',
    message: 'block list response - List of pn number blocks',
    result: {
      blocks,
      totalBlock,
    },
    total: blocks.length,
  };
};

module.exports = {
  viewBlocks,
};
