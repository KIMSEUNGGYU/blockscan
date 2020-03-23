const viewWrongRequest = () => {
  return {
    code: 405,
    status: 'success',
    message: '허용되지 않는 방법 - 해당 구문은 param 으로 요청해야합니다',
    result: {},
  };
};

const viewBadRequest = () => {
  return {
    code: 400,
    status: 'success',
    message: '잘못된 요청 - 지원하지 않는 방법으로 요청했습니다.',
    result: {},
  };
};

const viewNotFoundData = () => {
  return {
    code: 404,
    status: 'success',
    message: '해당 데이터를 찾을 수 없습니다.',
    result: {},
  };
};

module.exports = {
  viewWrongRequest,
  viewNotFoundData,
  viewBadRequest,
};
