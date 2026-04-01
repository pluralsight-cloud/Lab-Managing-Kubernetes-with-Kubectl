/**
 * BROKEN BRANCH: runs when the Node server starts (each pod).
 * stderr → visible in `kubectl logs`.
 */
export async function register() {
  console.error(
    "[BROKEN-BRANCH] Server started in broken mode — expect 500s on page requests (rollback demo)."
  );
}
