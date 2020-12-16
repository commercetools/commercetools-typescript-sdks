
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
import { ImportOperationStatus } from 'models/importoperations'
import { QueryParam, executeRequest } from 'shared/utils/common-types'
import { ApiRequest } from 'shared/utils/requests-utils'

export class ByProjectKeyInventoriesImportSinkKeyByImportSinkKeyResourceKeyByResourceKeyRequestBuilder {

    
      constructor(
        protected readonly args: {
          pathArgs: {
                projectKey: string,
                importSinkKey: string,
                resourceKey: string
           },
          executeRequest: executeRequest,
          baseUri?: string
        }
      ) {}
    /**
    *	Deletes the inventory given by the resource key.
    */
    public delete(
                  methodArgs?:{
                     
                     headers?: {
                        [key:string]:string
                     },
                  }): ApiRequest<ImportOperationStatus> {
       return new ApiRequest<ImportOperationStatus>(
           {
              baseUri: this.args.baseUri,
              method: 'DELETE',
              uriTemplate: '/{projectKey}/inventories/importSinkKey={importSinkKey}/resourceKey={resourceKey}',
              pathVariables: this.args.pathArgs,
              headers: {
                  ...methodArgs?.headers
              },
           },
           this.args.executeRequest
       )
    }
    

}
