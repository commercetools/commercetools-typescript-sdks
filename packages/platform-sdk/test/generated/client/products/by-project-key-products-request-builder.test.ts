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
      uri: '/test_projectKey/products?priceCurrency=priceCurrency',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .get({ queryArgs: { priceCurrency: 'priceCurrency' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/products?priceCountry=priceCountry',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .get({ queryArgs: { priceCountry: 'priceCountry' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/products?priceCustomerGroup=priceCustomerGroup',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .get({ queryArgs: { priceCustomerGroup: 'priceCustomerGroup' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/products?priceChannel=priceChannel',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .get({ queryArgs: { priceChannel: 'priceChannel' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/products?localeProjection=localeProjection',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .get({ queryArgs: { localeProjection: 'localeProjection' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/products?storeProjection=storeProjection',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .get({ queryArgs: { storeProjection: 'storeProjection' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/products?expand=expand',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .get({ queryArgs: { expand: 'expand' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/products?sort=sort',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .get({ queryArgs: { sort: 'sort' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/products?limit=7',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .get({ queryArgs: { limit: 7 } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/products?offset=3',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .get({ queryArgs: { offset: 3 } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/products?withTotal=true',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .get({ queryArgs: { withTotal: true } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/products?where=where',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .get({ queryArgs: { where: 'where' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/products?var.varName=var.varName',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .get({ queryArgs: { 'var.varName': 'var.varName' } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/products',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .get(),
    },
    {
      method: 'post',
      uri: '/test_projectKey/products?priceCurrency=priceCurrency',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .post({
          body: null,
          headers: null,
          queryArgs: { priceCurrency: 'priceCurrency' },
        }),
    },
    {
      method: 'post',
      uri: '/test_projectKey/products?priceCountry=priceCountry',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .post({
          body: null,
          headers: null,
          queryArgs: { priceCountry: 'priceCountry' },
        }),
    },
    {
      method: 'post',
      uri: '/test_projectKey/products?priceCustomerGroup=priceCustomerGroup',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .post({
          body: null,
          headers: null,
          queryArgs: { priceCustomerGroup: 'priceCustomerGroup' },
        }),
    },
    {
      method: 'post',
      uri: '/test_projectKey/products?priceChannel=priceChannel',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .post({
          body: null,
          headers: null,
          queryArgs: { priceChannel: 'priceChannel' },
        }),
    },
    {
      method: 'post',
      uri: '/test_projectKey/products?localeProjection=localeProjection',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .post({
          body: null,
          headers: null,
          queryArgs: { localeProjection: 'localeProjection' },
        }),
    },
    {
      method: 'post',
      uri: '/test_projectKey/products?storeProjection=storeProjection',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .post({
          body: null,
          headers: null,
          queryArgs: { storeProjection: 'storeProjection' },
        }),
    },
    {
      method: 'post',
      uri: '/test_projectKey/products?expand=expand',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .post({ body: null, headers: null, queryArgs: { expand: 'expand' } }),
    },
    {
      method: 'post',
      uri: '/test_projectKey/products',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .products()
        .post({ body: null, headers: null }),
    },
  ]
}

describe('Testing ByProjectKeyProductsRequestBuilder Requests', () => {
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
