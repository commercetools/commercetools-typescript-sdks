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
import {
  Review,
  ReviewDraft,
  ReviewPagedQueryResponse,
} from '../../models/review'
import { executeRequest, QueryParam } from '../../shared/utils/common-types'
import { ApiRequest } from '../../shared/utils/requests-utils'
import { ByProjectKeyReviewsByIDRequestBuilder } from './by-project-key-reviews-by-id-request-builder'
import { ByProjectKeyReviewsKeyByKeyRequestBuilder } from './by-project-key-reviews-key-by-key-request-builder'

export class ByProjectKeyReviewsRequestBuilder {
  constructor(
    protected readonly args: {
      pathArgs: {
        projectKey: string
      }
      executeRequest: executeRequest
      baseUri?: string
    }
  ) {}
  public withKey(childPathArgs: {
    key: string
  }): ByProjectKeyReviewsKeyByKeyRequestBuilder {
    return new ByProjectKeyReviewsKeyByKeyRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
        ...childPathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  public withId(childPathArgs: {
    ID: string
  }): ByProjectKeyReviewsByIDRequestBuilder {
    return new ByProjectKeyReviewsByIDRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
        ...childPathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }

  /**
   *	Query reviews
   */
  public get(methodArgs?: {
    queryArgs?: {
      expand?: string | string[]
      sort?: string | string[]
      limit?: number
      offset?: number
      withTotal?: boolean
      where?: string | string[]
      [key: string]: QueryParam
    }
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<ReviewPagedQueryResponse> {
    return new ApiRequest<ReviewPagedQueryResponse>(
      {
        baseUri: this.args.baseUri,
        method: 'GET',
        uriTemplate: '/{projectKey}/reviews',
        pathVariables: this.args.pathArgs,
        headers: {
          ...methodArgs?.headers,
        },
        queryParams: methodArgs?.queryArgs,
      },
      this.args.executeRequest
    )
  }
  /**
   *	Create Review
   */
  public post(methodArgs: {
    queryArgs?: {
      expand?: string | string[]
      [key: string]: QueryParam
    }
    body: ReviewDraft
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<Review> {
    return new ApiRequest<Review>(
      {
        baseUri: this.args.baseUri,
        method: 'POST',
        uriTemplate: '/{projectKey}/reviews',
        pathVariables: this.args.pathArgs,
        headers: {
          'Content-Type': 'application/json',
          ...methodArgs?.headers,
        },
        queryParams: methodArgs?.queryArgs,
        body: methodArgs?.body,
      },
      this.args.executeRequest
    )
  }
}
