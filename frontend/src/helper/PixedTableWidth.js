import { InnerWidth } from './CustomHook';

export default path => {
  const Width = InnerWidth();
  const Condition = path === 'blocks' ? true : false;
  //   width > 1024 ? null : { if() {} };
  const PixedWidth = [];

  if (Condition) {
    // block
    if (Width < 768) {
      PixedWidth.push('8%', '15%', '7%', '7%', '20%', '10%', '10%', '10%', '13%');
    } else if (Width >= 768 && Width < 1024) {
      PixedWidth.push('8%', '25%', '5%', '5%', '25%', null, null, '15%', '17%');
    } else if (Width < 1200 && Width >= 1024) {
      PixedWidth.push('8%', '20%', '7%', '7%', '25%', '10%', null, '10%', '13%');
    } else {
      PixedWidth.push('8%', '15%', '7%', '7%', '20%', '10%', '10%', '10%', '13%');
    }
  } else {
    // tx
    if (Width < 768) {
      PixedWidth.push('13%', '5%', '12%', '25%', '25%', '10%', '10%');
    } else if (Width >= 768 && Width < 1024) {
      PixedWidth.push('13%', '10%', '17%', '20%', '20%', null, null);
    } else if (Width < 1200 && Width >= 1024) {
      PixedWidth.push('13%', '5%', '17%', '20%', '20%', '15%', null);
    } else {
      PixedWidth.push('13%', '5%', '12%', '25%', '25%', '10%', '10%');
    }
  }

  return PixedWidth;
};
