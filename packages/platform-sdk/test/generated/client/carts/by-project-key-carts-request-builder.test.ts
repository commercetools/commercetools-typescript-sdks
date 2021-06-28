/**
 *
 *    Generated file, please do not change!!!
 *    From http://www.commercetools.com/ with love
 *
 *                ,d88b.d88b,
 *                88888888888
 *                `Y8888888Y'
 *                  `Y888Y'
 *                    `Y'
 *
 */

import { RequestWithMethod } from '../../../request-with-method'
import { ApiRoot } from '../../../../src'

const apiRoot: ApiRoot = new ApiRoot({ executeRequest: null })

export function getRequestsWithMethodParameters(): RequestWithMethod[] {
  return [
    {
      method: 'get',
      uri: '/test_projectKey/carts?customerId=customerId',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .carts()
        .get({ queryArgs: { customerId: 'customerId' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/carts?expand=expand',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .carts()
        .get({ queryArgs: { expand: 'expand' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/carts?sort=sort',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .carts()
        .get({ queryArgs: { sort: 'sort' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/carts?limit=7',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .carts()
        .get({ queryArgs: { limit: 7 } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/carts?offset=3',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .carts()
        .get({ queryArgs: { offset: 3 } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/carts?withTotal=true',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .carts()
        .get({ queryArgs: { withTotal: true } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/carts?where=where',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .carts()
        .get({ queryArgs: { where: 'where' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/carts?var.varName=var.varName',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .carts()
        .get({ queryArgs: { 'var.varName': 'var.varName' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/carts',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .carts()
        .get(),
    },
    {
      method: 'post',
      uri: '/test_projectKey/carts?expand=expand',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .carts()
        .post({ body: null, headers: null, queryArgs: { expand: 'expand' } }),
    },
    {
      method: 'post',
      uri: '/test_projectKey/carts',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .carts()
        .post({ body: null, headers: null }),
    },
  ]
}

describe('Testing ByProjectKeyCartsRequestBuilder Requests', () => {
  const requestsToTest = getRequestsWithMethodParameters()
  requestsToTest.forEach(rm => {
    test(`Testing => request method: ${rm.method} and url: ${rm.uri}`, async () => {
      expect(rm.method.toLowerCase()).toBe(
        rm.request.clientRequest().method.toLowerCase()
      )
      expect(rm.uri.toLowerCase()).toBe(
        rm.request.clientRequest().uri.toLowerCase()
      )
    })
  })
})
