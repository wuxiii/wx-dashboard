/**
 * 资源相关请求模块
 */

import request from '@/utils/request'

export const getResourcePages = (data: any) => {
  return request({
    method: 'POST',
    url: '/boss/resource/getResourcePages',
    data
  })
}

export const getAllResources = () => {
  return request({
    method: 'GET',
    url: '/boss/resource/getAll'
  })
}

export const allocateRoleResources = (data: any) => {
  return request({
    method: 'POST',
    url: '/boss/resource/allocateRoleResources',
    data
  })
}

export const getRoleResources = (roleId: string | number) => {
  return request({
    method: 'GET',
    url: '/boss/resource/getRoleResources',
    params: {
      roleId
    }
  })
}

export const getCategoryGetAll = () => {
  return request({
    method: 'GET',
    url: '/boss/resource/category/getAll'
  })
}

export const createOrUpdateResource = (data: any) => {
  return request({
    method: 'POST',
    url: '/boss/resource/saveOrUpdate',
    data
  })
}

export const deleteResource = (id: number) => {
  return request({
    method: 'DELETE',
    url: '/boss/resource/saveOrUpdate/' + id
  })
}
