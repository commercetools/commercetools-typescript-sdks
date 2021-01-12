/**
 *
 *    Generated file, please do not change!!!
 *    From http://www.vrap.io/ with love
 *
 *                ,d88b.d88b,
 *                88888888888
 *                `Y8888888Y'
 *                  `Y888Y'
 *                    `Y'
 *
 */
import { MyCustomer, MyCustomerUpdate } from '../../models/me'
import { executeRequest, QueryParam } from '../../shared/utils/common-types'
import { ApiRequest } from '../../shared/utils/requests-utils'
import { ByProjectKeyMeActiveCartRequestBuilder } from '../active-cart/by-project-key-me-active-cart-request-builder'
import { ByProjectKeyMeCartsRequestBuilder } from '../carts/by-project-key-me-carts-request-builder'
import { ByProjectKeyMeEmailConfirmRequestBuilder } from '../confirm/by-project-key-me-email-confirm-request-builder'
import { ByProjectKeyMeLoginRequestBuilder } from '../login/by-project-key-me-login-request-builder'
import { ByProjectKeyMeOrdersRequestBuilder } from '../orders/by-project-key-me-orders-request-builder'
import { ByProjectKeyMePasswordRequestBuilder } from '../password/by-project-key-me-password-request-builder'
import { ByProjectKeyMePaymentsRequestBuilder } from '../payments/by-project-key-me-payments-request-builder'
import { ByProjectKeyMeShoppingListsRequestBuilder } from '../shopping-lists/by-project-key-me-shopping-lists-request-builder'
import { ByProjectKeyMeSignupRequestBuilder } from '../signup/by-project-key-me-signup-request-builder'

export class ByProjectKeyMeRequestBuilder {
  constructor(
    protected readonly args: {
      pathArgs: {
        projectKey: string
      }
      executeRequest: executeRequest
      baseUri?: string
    }
  ) {}
  public emailConfirm(): ByProjectKeyMeEmailConfirmRequestBuilder {
    return new ByProjectKeyMeEmailConfirmRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  public password(): ByProjectKeyMePasswordRequestBuilder {
    return new ByProjectKeyMePasswordRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  public signup(): ByProjectKeyMeSignupRequestBuilder {
    return new ByProjectKeyMeSignupRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  public login(): ByProjectKeyMeLoginRequestBuilder {
    return new ByProjectKeyMeLoginRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  public activeCart(): ByProjectKeyMeActiveCartRequestBuilder {
    return new ByProjectKeyMeActiveCartRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  /**
   *	A shopping cart holds product variants and can be ordered.
   */
  public carts(): ByProjectKeyMeCartsRequestBuilder {
    return new ByProjectKeyMeCartsRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  /**
   *	An order can be created from a cart, usually after a checkout process has been completed.
   */
  public orders(): ByProjectKeyMeOrdersRequestBuilder {
    return new ByProjectKeyMeOrdersRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  /**
   *	The My Payments endpoint creates and provides access to payments scoped to a specific user.
   */
  public payments(): ByProjectKeyMePaymentsRequestBuilder {
    return new ByProjectKeyMePaymentsRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }
  /**
   *	The My Shopping Lists endpoint creates and provides access to shopping lists scoped to a specific user.
   */
  public shoppingLists(): ByProjectKeyMeShoppingListsRequestBuilder {
    return new ByProjectKeyMeShoppingListsRequestBuilder({
      pathArgs: {
        ...this.args.pathArgs,
      },
      executeRequest: this.args.executeRequest,
      baseUri: this.args.baseUri,
    })
  }

  public get(methodArgs?: {
    queryArgs?: {
      sort?: string | string[]
      limit?: number
      offset?: number
      withTotal?: boolean
      expand?: string | string[]
      where?: string | string[]
      [key: string]: QueryParam
    }
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<MyCustomer> {
    return new ApiRequest<MyCustomer>(
      {
        baseUri: this.args.baseUri,
        method: 'GET',
        uriTemplate: '/{projectKey}/me',
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
   *	Update my customer
   */
  public post(methodArgs: {
    body: MyCustomerUpdate
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<MyCustomer> {
    return new ApiRequest<MyCustomer>(
      {
        baseUri: this.args.baseUri,
        method: 'POST',
        uriTemplate: '/{projectKey}/me',
        pathVariables: this.args.pathArgs,
        headers: {
          'Content-Type': 'application/json',
          ...methodArgs?.headers,
        },
        body: methodArgs?.body,
      },
      this.args.executeRequest
    )
  }
  /**
   *	Delete my Customer
   */
  public delete(methodArgs: {
    queryArgs: {
      version: number
      [key: string]: QueryParam
    }
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<MyCustomer> {
    return new ApiRequest<MyCustomer>(
      {
        baseUri: this.args.baseUri,
        method: 'DELETE',
        uriTemplate: '/{projectKey}/me',
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
