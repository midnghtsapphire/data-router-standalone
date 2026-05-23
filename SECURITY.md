# Security Policy

## Supported scope

This repository is under active development; security issues in current default branch code should be reported.

## Reporting a vulnerability

1. Do **not** open public issues for security reports.
2. Report privately to repository maintainers with:
   - affected file/endpoint
   - reproduction steps
   - potential impact
3. Include any proof-of-concept safely (no production secrets).

## Security expectations

- Keep secrets in environment variables only.
- Rotate exposed credentials immediately.
- Validate and sanitize user-supplied input at API boundaries.
