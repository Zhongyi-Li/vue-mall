import axiosA from './axios'

export function getHomeData(){
    return axiosA({
        url:'/api/v1/home/multidata'
    })
}
export function getGoodsData(type,page){
    return axiosA({
        url:'/api/v1/home/data',
        params: {
            type,
            page,
        }
    })
}
