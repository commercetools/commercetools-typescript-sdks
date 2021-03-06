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
import { TaxCategory, TaxCategoryUpdate } from '../../models/tax-category'
import { executeRequest, QueryParam } from '../../shared/utils/common-types'
import { ApiRequest } from '../../shared/utils/requests-utils'

export class ByProjectKeyTaxCategoriesKeyByKeyRequestBuilder {
  constructor(
    protected readonly args: {
      pathArgs: {
        projectKey: string
        key: string
      }
      executeRequest: executeRequest
      baseUri?: string
    }
  ) {}
  /**
   *	Get TaxCategory by key
   */
  public get(methodArgs?: {
    queryArgs?: {
      expand?: string | string[]
      [key: string]: QueryParam
    }
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<TaxCategory> {
    return new ApiRequest<TaxCategory>(
      {
        baseUri: this.args.baseUri,
        method: 'GET',
        uriTemplate: '/{projectKey}/tax-categories/key={key}',
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
   *	Update TaxCategory by key
   */
  public post(methodArgs: {
    queryArgs?: {
      expand?: string | string[]
      [key: string]: QueryParam
    }
    body: TaxCategoryUpdate
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<TaxCategory> {
    return new ApiRequest<TaxCategory>(
      {
        baseUri: this.args.baseUri,
        method: 'POST',
        uriTemplate: '/{projectKey}/tax-categories/key={key}',
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
  /**
   *	Delete TaxCategory by key
   */
  public delete(methodArgs: {
    queryArgs: {
      version: number
      expand?: string | string[]
      [key: string]: QueryParam
    }
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<TaxCategory> {
    return new ApiRequest<TaxCategory>(
      {
        baseUri: this.args.baseUri,
        method: 'DELETE',
        uriTemplate: '/{projectKey}/tax-categories/key={key}',
        pathVariables: this.args.pathArgs,
        headers: {
          ...methodArgs?.headers,
        },
        queryParams: methodArgs?.queryArgs,
      },
      this.args.executeRequest
    )
  }
}
