export function getErrorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

export function isMissingPublicFunctionError(error: unknown): boolean {
  const message = getErrorMessage(error);
  return message.includes("Could not find public function");
}

export function toUserSafeConvexMessage(
  error: unknown,
  fallbackMessage: string,
  missingFunctionMessage?: string
): string {
  if (isMissingPublicFunctionError(error)) {
    return (
      missingFunctionMessage ??
      "هذه الميزة المباشرة غير متاحة حالياً في نسخة الواجهة فقط."
    );
  }
  const message = getErrorMessage(error).trim();
  return message || fallbackMessage;
}
