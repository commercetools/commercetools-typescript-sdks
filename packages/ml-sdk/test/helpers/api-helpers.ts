// import { createClient } from '@commercetools/sdk-client'
// import { createAuthMiddlewareForClientCredentialsFlow } from '@commercetools/sdk-middleware-auth'
// import { createHttpMiddleware } from '@commercetools/sdk-middleware-http'
import { createClient, createAuthForClientCredentialsFlow, createHttpClient } from '../../../sdk-client/src/index'
import fetch from 'node-fetch'
import {
  ApiRoot,
  createExecutorFromMiddlewares,
  executeRequest,
} from '../../src'
import { requireEnvVar } from './test-utils'

const projectKey = requireEnvVar('CTP_PROJECT_KEY')
const clientId = requireEnvVar('CTP_CLIENT_ID')
const clientSecret = requireEnvVar('CTP_CLIENT_SECRET')
const authURL = requireEnvVar('CTP_AUTH_URL')
const ml_host = requireEnvVar('CTP_ML_API_URL')

const authMiddleware = createAuthForClientCredentialsFlow({
  host: authURL,
  projectKey,
  oauthUri: '',
  credentials: {
    clientId,
    clientSecret,
  },
  fetch,
  scopes: ['']
})

const httpMiddleware = createHttpClient({
  host: ml_host,
  fetch,
})

const ctpClient = createClient({
  middlewares: [authMiddleware, httpMiddleware],
})

const executor: executeRequest = createExecutorFromMiddlewares(
  ctpClient.execute
)

export const mlApiBuilder = new ApiRoot({
  executeRequest: executor,
  baseUri: ml_host,
}).withProjectKey({ projectKey })
