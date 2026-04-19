export const getEdgeFunctionErrorMessage = async (
  error: unknown,
  fallback: string,
) => {
  if (!error || typeof error !== "object") {
    return fallback;
  }

  const typedError = error as { context?: Response; message?: string };

  if (typedError.context instanceof Response) {
    try {
      const payload = await typedError.context.clone().json();
      if (payload && typeof payload === "object" && "error" in payload && typeof payload.error === "string") {
        return payload.error;
      }
    } catch {
      // Ignore JSON parsing errors and fall back to text/default message.
    }

    try {
      const text = await typedError.context.clone().text();
      if (text.trim()) {
        return text;
      }
    } catch {
      // Ignore response body read errors and fall back below.
    }
  }

  if (
    typeof typedError.message === "string" &&
    typedError.message.trim() &&
    typedError.message !== "Edge Function returned a non-2xx status code"
  ) {
    return typedError.message;
  }

  return fallback;
};