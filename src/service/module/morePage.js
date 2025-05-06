import mcRequest from "../request/index";

export function getEntireRoomList(offset = 0, size = 20){
  return mcRequest.get({
    url: "entire/list",
    params: {
      offset,
      size
    }
  })
}