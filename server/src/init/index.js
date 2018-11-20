import request from "request-promise";
import cheerio from "cheerio";
const getTimeout = () => {
  let r = Math.random() * 10000;
  return Number(r.toFixed(0));
};
const getDetail = async (list) => {
  let resultArr = [];
  return new Promise((reslove, reject) => {
    let init_timeout = getTimeout();
    let timeoutArr = [];
    for (let index = 0; index < list.length; index++) {
      timeoutArr[index] = setTimeout(async () => {
        let detail = await request({ uri: list[index] });
        const $ = cheerio.load(detail, { decodeEntities: false });
        const topNo = $('.top250-no').text();
        const title = $('#content h1 span').eq(0).text();
        const publishYear = $('#content h1 span').eq(1).text();
        const imgUrl = $('#mainpic img').attr('src');
        const director = $('#info>span').eq(0).find('a').text();
        let screenWriters = [];
        $('#info>span').eq(1).find('a').each((i, e) => {
          screenWriters.push($(e).text());
        });
        screenWriters = screenWriters.join('、');
        let actors = [];
        $('#info>span').eq(2).find('.attrs').find('span').each((j, el) => {
          actors.push($(el).text().replace('/', '').trim());
        });
        actors = actors.join('、');
        const describe = $('#link-report').find('.all').length === 0 ? $('#link-report span').eq(0).text().trim() : $('#link-report').find('.all').text().trim();
        const movie = { topNo, title, publishYear, imgUrl, director, screenWriters, actors, describe };
        //console.log(movie);
        resultArr.push(movie);
        if (index === list.length - 1) {
          reslove(resultArr);
        };
        clearTimeout(timeoutArr[index]);
      }, init_timeout);
      init_timeout += getTimeout();
    };
  })
};
const getUrlList = async (max) => {
  let detail_url_list = [];
  return new Promise((reslove, reject) => {
    let init_timeout = getTimeout();
    let timeoutArr = [];
    for (let index = 0; index < max; index++) {
      timeoutArr[index] = setTimeout(async () => {
        let pageIndex = 25 * (index - 1);
        let res = await request({ uri: `https://movie.douban.com/top250?start=${pageIndex}&filter=` });
        const $ = cheerio.load(res, { decodeEntities: false });
        $('.item').each((i, e) => {
          const detail_url = $(e).find('.hd').find('a').attr('href');
          detail_url_list.push(detail_url);
        });
        if (index === max - 1) {
          console.log(detail_url_list);
          reslove(detail_url_list);
        };
        clearTimeout(timeoutArr[index]);
      }, init_timeout);
      init_timeout += getTimeout();
    };
  });
};
const init = async () => {
  getUrlList(1).then(list => {
    getDetail(list).then(data => {
      console.log(data);
    });
  });
};
export default init;
