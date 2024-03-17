import type { DocumentParameter } from '@vue/apollo-composable/dist/useQuery'
import type { ApolloError } from '@apollo/client'
import type { AsyncDataOptions } from '#app'
import { useAsyncData, useQuery } from '#imports'

interface Error {
  data: ApolloError;
}

export function useAsyncQuery<T> (
  doc: DocumentParameter<any, undefined>,
  options?: AsyncDataOptions<T>
) {
  return useAsyncData<T, Error>(
    () =>
      new Promise<T>((resolve, reject) => {
        const { onResult, onError } = useQuery<T>(doc)
        onResult(({ data, loading }) => {
          if (loading === false) {
            resolve(data)
          }
        })
        onError((error) => {
          reject(createError(error))
        })
      }),
    options
  )
}
