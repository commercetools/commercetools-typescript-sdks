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

export type ImageConfigUpdateAction = ChangeStatusUpdateAction
export interface ChangeStatusUpdateAction {
  readonly action: 'changeStatus'
  readonly status: string
}
export interface ImageSearchConfigRequest {
  /**
   *	The list of update actions to be performed on the project.
   */
  readonly actions: ImageConfigUpdateAction[]
}
export interface ImageSearchConfigResponse {
  /**
   *	The image search activation status.
   */
  readonly status: string
  readonly lastModifiedAt: string
}
