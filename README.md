# Aha API Client

A TypeScript API client for Aha, automatically generated from the OpenAPI specification.

## Installation

```bash
npm install aha-api-client
```

## Usage

```typescript
import { AhaClient } from 'aha-api-client';

// Initialize the client with your API key
const client = new AhaClient({
  apiKey: 'your-api-key',
  // Optional: override the base URL
  // baseUrl: 'https://custom-aha-instance.com/api',
});

// Example usage (actual methods will depend on the generated client)
async function example() {
  try {
    // The actual API methods will be available after the client is generated
    // This is just a placeholder example
    // const features = await client.features.getFeatures();
    // console.log(features);
  } catch (error) {
    console.error('Error:', error);
  }
}
```

## Authentication

The client supports authentication via API key. You can obtain an API key from your Aha account settings.

```typescript
const client = new AhaClient({
  apiKey: 'your-api-key',
});
```

## Configuration Options

The client accepts the following configuration options:

| Option | Type | Description | Default |
|--------|------|-------------|---------|
| `apiKey` | `string` | Your Aha API key | `undefined` |
| `baseUrl` | `string` | The base URL for the Aha API | `'https://api.aha.io'` |
| `timeout` | `number` | Request timeout in milliseconds | `10000` |
| `headers` | `Record<string, string>` | Additional headers to include in requests | `{}` |

## Development

This client is automatically generated from the OpenAPI specification in the [cedricziel/aha-spec](https://github.com/cedricziel/aha-spec) repository using [OpenAPI Generator](https://github.com/OpenAPITools/openapi-generator).

### Regenerating the Client

The client is automatically regenerated daily via GitHub Actions. You can also manually trigger the regeneration by running the GitHub Action workflow.

## License

MIT
