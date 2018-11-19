import request from "request-promise";
import cheerio from "cheerio";

const init = async () => {
  let resultArr = []; //用来存储筛选后的对象
  let detail_url_list = [];

  for (let i = 1; i <= 1; i++) {
    let pageIndex = 25 * (i - 1);
    let res = await request({ uri: `https://movie.douban.com/top250?start=${pageIndex}&filter=` });
    const _$ = cheerio.load(res, { decodeEntities: false });
    _$('.item').each((i, e) => {
      const detail_url = _$(e).find('.hd').find('a').attr('href');
      detail_url_list.push(detail_url);
    });
  };
  for (let j = 0; j < detail_url_list.length; j++) {
    let detail = await request({ uri: detail_url_list[j] });
    const $ = cheerio.load(detail, { decodeEntities: false });
    const topNo = $('.top250-no').text();
    const movie = { topNo };
    resultArr.push(movie);
  };
  let count = 0;
  let loop = setInterval(async () => {
    if (count === detail_url_list.length) {
      clearInterval(loop);
    } else {
      let detail = await request({ uri: detail_url_list[j] });
      const $ = cheerio.load(detail, { decodeEntities: false });
      const topNo = $('.top250-no').text();
      const movie = { topNo };
      resultArr.push(movie);
      count++;
      console.log(resultArr);
    }
  }, 10000);
};
export default init;
