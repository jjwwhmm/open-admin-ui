import request from '@/libs/request'

/**
 * 获取分页接口列表
 * @param page
 * @param limit
 */
export const getRateLimits = ({page, limit}) => {
  const params = {page: page, limit: limit}
  return request({
    url: 'gateway/limit/ip',
    params,
    method: 'get'
  })
}

export const addRateLimit = ({policyName, policyType, ipAddress}) => {
  const data = {
    policyName: policyName,
    policyType: policyType,
    ipAddress: ipAddress
  }
  return request({
    url: 'gateway/limit/ip/add',
    data,
    method: 'post'
  })
}

/**
 * 更新IP限制
 * @param policyName
 * @param policyType
 * @param ipAddress
 */
export const updateRateLimit = ({policyId,policyName, policyType, ipAddress}) => {
  const data = {
    policyId:policyId,
    policyName: policyName,
    policyType: policyType,
    ipAddress: ipAddress
  }
  return request({
    url: 'gateway/limit/ip/update',
    data,
    method: 'post'
  })
}


/**
 * 删除IP限制
 * @param apiId
 */
export const removeRateLimit = (policyId) => {
  const data = {
    policyId: policyId
  }
  return request({
    url: 'gateway/limit/ip/remove',
    data,
    method: 'post'
  })
}


/**
 * 查询策略已绑定API列表
 * @param policyId
 */
export const getRateLimitApis = (policyId) => {
  const params = {
    policyId: policyId
  }
  return request({
    url: 'gateway/limit/ip/api/list',
    params,
    method: 'get'
  })
}

/**
 * 绑定API
 * @param policyId
 * @param apiIds
 */
export const addRateLimitApis = ({policyId,apiIds}) => {
  const data = {
    policyId: policyId,
    apiIds:apiIds.join(',')
  }
  return request({
    url: 'gateway/limit/ip/api/add',
    data,
    method: 'post'
  })
}
