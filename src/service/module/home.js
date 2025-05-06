import mcRequest from "../request/index";

export function getHomeGoodPriceData() {
  return mcRequest.get({
    url: "/home/goodprice"
  })
}

export function getHomeLongData() {
  return mcRequest.get({
    url: "/home/longfor"
  })
}

export function getHomeHighScoreData() {
  return mcRequest.get({
    url: "/home/highscore"
  })
}


export function getHomeDiscountData() {
  return mcRequest.get({
    url: "/home/discount"
  })
}


export function getHomeHotRecommendData() {
  return mcRequest.get({
    url: "/home/hotrecommenddest"
  })
}

export function getHomePlusData() {
  return mcRequest.get({
    url: "/home/plus"
  })
}
