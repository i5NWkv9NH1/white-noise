export enum ArtistOrder {
  // * 综合评价
  mix = 1,
  // * 最新入驻
  latest = 2,
  // * 近期活跃
  recently = 3,
}
export enum ArtistCategory {
  // * 不限
  all = 0,
  // * 头像
  avatar = 8,
  // * 插图
  illustration = 134,
  // * Q版
  mini = 51,
}
export enum ArtistStyle {
  // * 日系
  Japanese = 3,
}
// * field // ! only_free
// * 档期空闲
export const artistSchedule = false
// * 精选画师
export const artistBoutique = false
// * 作品数量
export const artworksCount = 5

export const getArtists = `https://www.mihuashi.com/api/v1/artists?page=1&type=all&only_boutique=false&only_free=false&artworks_count=5`
