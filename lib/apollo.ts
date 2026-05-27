type GraphQLErrorPayload = {
  message: string;
};

type GraphQLResponse<TData> = {
  data?: TData;
  errors?: GraphQLErrorPayload[];
};

type RequestOptions = {
  revalidate?: number;
  tags?: string[];
};

export async function executeWordPressQuery<TData, TVariables extends Record<string, unknown>>(
  query: string,
  variables: TVariables,
  options: RequestOptions = {}
): Promise<TData> {
  const endpoint =
    process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL ||
    process.env.NEXT_PUBLIC_WORDPRESS_API?.replace(/\/wp-json\/?$/, "/graphql");

  if (!endpoint) {
    throw new Error("Missing WordPress GraphQL environment configuration.");
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
    next: {
      revalidate: options.revalidate ?? 300,
      tags: options.tags,
    },
  });

  if (!response.ok) {
    throw new Error(`WordPress GraphQL request failed with status ${response.status}.`);
  }

  const payload = (await response.json()) as GraphQLResponse<TData>;

  if (payload.errors?.length) {
    throw new Error(payload.errors.map((error) => error.message).join(" | "));
  }

  if (!payload.data) {
    throw new Error("WordPress GraphQL response did not include data.");
  }

  return payload.data;
}
