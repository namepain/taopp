export default async function api(path) {
  const url = 'https://www.easy-mock.com/mock/5b13ba02c5450f078273c55b/example/' + path
  const options = {
    method: 'GET'
  }

  try {
    const res = await GET(url, options)

    if (res.data && res.data.returnCode === '0') {
      return res.data.returnValue
    } else {
      console.log('出错了')
    }
  } catch (e) {
    console.log('出错了..')
  }
}

/**
 * GET请求
 * @param url 请求地址
 * @param options 请求参数
 */
export function GET(url, options) {
  return commonFetch(url, options, 'GET')
}

/**
 * POST请求
 * @param url 请求地址
 * @param options 请求参数
 */
export function POST(url, options) {
  return commonFetch(url, options, 'POST')
}


/**
 * 将对象转为 a=1&b=2的形式
 * @param obj 对象
 */
function obj2String(obj, arr = [], idx = 0) {
  for (let item in obj) {
    arr[idx++] = [item, obj[item]]
  }
  return new URLSearchParams(arr).toString()
}

/**
 * 真正的请求
 * @param url 请求地址
 * @param options 请求参数
 * @param method 请求方式
 */
function commonFetch(url, options, method = 'GET') {
  const searchStr = obj2String(options)
  let initObj = {}
  if (method === 'GET') { // 如果是GET请求，拼接url
    url += '?' + searchStr
    initObj = {
      method: method,
      credentials: 'include'
    }
  } else {
    initObj = {
      method: method,
      credentials: 'include',
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      }),
      body: searchStr
    }
  }

  return fetch(url, initObj).then((res) => {
    return res.json()
  }).then((res) => {
    return res
  })
}
