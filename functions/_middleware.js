/**
 * Cloudflare Pages Middleware for Password Protection
 * Protects specific routes with basic authentication
 */

// Path patterns that require authentication
const PROTECTED_PATHS = [
  '/examples/spantree-drone-ai',
  '/docs/examples/spantree-drone-ai'  // Also protect the docs version
];

// Check if a path should be protected
function isProtectedPath(pathname) {
  return PROTECTED_PATHS.some(path => 
    pathname === path || pathname.startsWith(path + '/')
  );
}

// Helper to check if the request has valid credentials
function hasValidCredentials(request, env) {
  const authorization = request.headers.get('Authorization');
  
  if (!authorization) {
    return false;
  }
  
  const [scheme, encoded] = authorization.split(' ');
  
  if (!encoded || scheme !== 'Basic') {
    return false;
  }
  
  try {
    const decoded = atob(encoded);
    const [username, password] = decoded.split(':');
    
    // Use environment variables for credentials
    const validUsername = env.AUTH_USERNAME || 'spantree';
    const validPassword = env.AUTH_PASSWORD || 'demo-password';
    
    return username === validUsername && password === validPassword;
  } catch (error) {
    return false;
  }
}

export async function onRequest(context) {
  const { request, next, env } = context;
  const url = new URL(request.url);
  
  // Allow all non-protected paths
  if (!isProtectedPath(url.pathname)) {
    return next();
  }
  
  // Allow access to static assets even on protected routes
  if (url.pathname.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$/i)) {
    return next();
  }
  
  // Check for valid credentials on protected paths
  if (!hasValidCredentials(request, env)) {
    return new Response('Unauthorized - This section requires authentication', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="SpanTree Drone AI Demo", charset="UTF-8"',
        'Content-Type': 'text/plain',
      },
    });
  }
  
  // Valid credentials, proceed with the request
  return next();
} 