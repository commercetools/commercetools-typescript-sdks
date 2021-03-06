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
import { ImportOperation } from '../../models/importoperations'
import { executeRequest } from '../../shared/utils/common-types'
import { ApiRequest } from '../../shared/utils/requests-utils'

export class ByProjectKeyCategoriesImportSinkKeyByImportSinkKeyImportOperationsByIdRequestBuilder {
  constructor(
    protected readonly args: {
      pathArgs: {
        projectKey: string
        importSinkKey: string
        id: string
      }
      executeRequest: executeRequest
      baseUri?: string
    }
  ) {}
  /**
   *	Retrieves the ImportOperation of a given ID.
   *
   */
  public get(methodArgs?: {
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<ImportOperation> {
    return new ApiRequest<ImportOperation>(
      {
        baseUri: this.args.baseUri,
        method: 'GET',
        uriTemplate:
          '/{projectKey}/categories/importSinkKey={importSinkKey}/import-operations/{id}',
        pathVariables: this.args.pathArgs,
        headers: {
          ...methodArgs?.headers,
        },
      },
      this.args.executeRequest
    )
  }
}
