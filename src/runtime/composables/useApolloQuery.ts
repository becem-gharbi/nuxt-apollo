import { useQuery } from "@vue/apollo-composable";
import type {
  DocumentParameter,
  UseQueryReturn,
} from "@vue/apollo-composable/dist/useQuery";

export default function <TResult>(
  options: DocumentParameter<TResult, undefined>
): UseQueryReturn<TResult, Record<string, never>> {
  return useQuery(options);
}
