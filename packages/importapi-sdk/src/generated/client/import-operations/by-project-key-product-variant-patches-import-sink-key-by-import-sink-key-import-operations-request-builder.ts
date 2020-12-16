
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
import { ByProjectKeyProductVariantPatchesImportSinkKeyByImportSinkKeyImportOperationsByIdRequestBuilder } from 'client/import-operations/by-project-key-product-variant-patches-import-sink-key-by-import-sink-key-import-operations-by-id-request-builder'
import { ProcessingState } from 'models/common'
import { ImportOperationPagedResponse } from 'models/importoperations'
import { QueryParam, executeRequest } from 'shared/utils/common-types'
import { ApiRequest } from 'shared/utils/requests-utils'

export class ByProjectKeyProductVariantPatchesImportSinkKeyByImportSinkKeyImportOperationsRequestBuilder {

    
      constructor(
        protected readonly args: {
          pathArgs: {
                projectKey: string,
                importSinkKey: string
           },
          executeRequest: executeRequest,
          baseUri?: string
        }
      ) {}
    public withIdValue(
       childPathArgs: {
           id: string
       }
    ): ByProjectKeyProductVariantPatchesImportSinkKeyByImportSinkKeyImportOperationsByIdRequestBuilder {
       return new ByProjectKeyProductVariantPatchesImportSinkKeyByImportSinkKeyImportOperationsByIdRequestBuilder(
             {
                pathArgs: {
                   ...this.args.pathArgs,
                   ...childPathArgs
                },
                executeRequest: this.args.executeRequest,
                baseUri: this.args.baseUri
             }
       )
    }
    
    /**
    *	Retrieves all product-variant-patches import operations of an import sink key.
    */
    public get(
               methodArgs?:{
                  
                  queryArgs?: {
                     'limit'?: number
                     'offset'?: number
                     'sort'?: string[]
                     'resourceKey'?: string
                     'state'?: ProcessingState
                     [key: string]: QueryParam
                  },
                  headers?: {
                     [key:string]:string
                  },
               }): ApiRequest<ImportOperationPagedResponse> {
       return new ApiRequest<ImportOperationPagedResponse>(
           {
              baseUri: this.args.baseUri,
              method: 'GET',
              uriTemplate: '/{projectKey}/product-variant-patches/importSinkKey={importSinkKey}/import-operations',
              pathVariables: this.args.pathArgs,
              headers: {
                  ...methodArgs?.headers
              },
              queryParams: methodArgs?.queryArgs,
           },
           this.args.executeRequest
       )
    }
    

}
