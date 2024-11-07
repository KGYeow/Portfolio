//
// Composable for $fetch
//
const baseURL = useRuntimeConfig().public.baseURL

async function fetchResult(url: string, method: any, body: any = null) {
  return $fetch(baseURL + url, {
    method: method,
    headers: { 'Authorization': `${useAuth().token.value}` },
    body: body ? JSON.stringify(body) : undefined,
  })
}

export const useFetchCustom = {
  $post(requestURL: string, body: {}) {
    return fetchResult(requestURL, 'POST', body)
  },
  $put(requestURL: string, body: {}) {
    return fetchResult(requestURL, 'PUT', body)
  },
  $get(requestURL: string, params: {} = {}) {
    return useFetch(baseURL + requestURL, {
      headers: { 'Authorization': `${useAuth().token.value}` },
      params: params,
    })
  },
  $fetch(requestURL: string, params: {} = {}) {
    return $fetch(baseURL + requestURL, {
      method: 'GET',
      headers: { 'Authorization': `${useAuth().token.value}` },
      params: params,
    })
  },
  $asyncData(requestURL: string, params: {} = {}) {
    return useAsyncData(requestURL, () =>
      $fetch(baseURL + requestURL, {
        headers: { 'Authorization': `${useAuth().token.value}` },
        params: params,
      })
    )
  },
  $delete(requestURL: string) {
    return fetchResult(requestURL, 'DELETE')
  }
}