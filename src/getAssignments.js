import { fetchAll, canvasDomain } from './internal/get'
import { buildOptions } from './internal/util'

export function getAssignments (courseId, ...options) { return fetchAll(canvasDomain + `/courses/${courseId}/assignments?` + buildOptions(options)) }
