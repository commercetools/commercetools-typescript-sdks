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
      uri:
        '/test_projectKey/recommendations/project-categories/test_productId?limit=7',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .recommendations()
        .projectCategories()
        .withProductId({ productId: 'test_productId' })
        .get({ queryArgs: { limit: 7 } }),
    },
    {
      method: 'get',
      uri:
        '/test_projectKey/recommendations/project-categories/test_productId?offset=3',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .recommendations()
        .projectCategories()
        .withProductId({ productId: 'test_productId' })
        .get({ queryArgs: { offset: 3 } }),
    },
    {
      method: 'get',
      uri:
        '/test_projectKey/recommendations/project-categories/test_productId?staged=true',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .recommendations()
        .projectCategories()
        .withProductId({ productId: 'test_productId' })
        .get({ queryArgs: { staged: true } }),
    },
    {
      method: 'get',
      uri:
        '/test_projectKey/recommendations/project-categories/test_productId?confidenceMin=0.7340351',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .recommendations()
        .projectCategories()
        .withProductId({ productId: 'test_productId' })
        .get({ queryArgs: { confidenceMin: 0.7340351 } }),
    },
    {
      method: 'get',
      uri:
        '/test_projectKey/recommendations/project-categories/test_productId?confidenceMax=0.30089796',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .recommendations()
        .projectCategories()
        .withProductId({ productId: 'test_productId' })
        .get({ queryArgs: { confidenceMax: 0.30089796 } }),
    },
    {
      method: 'get',
      uri: '/test_projectKey/recommendations/project-categories/test_productId',
      request: apiRoot
        .withProjectKey({ projectKey: 'test_projectKey' })
        .recommendations()
        .projectCategories()
        .withProductId({ productId: 'test_productId' })
        .get(),
    },
  ]
}

describe('Testing ByProjectKeyRecommendationsProjectCategoriesByProductIdRequestBuilder Requests', () => {
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
