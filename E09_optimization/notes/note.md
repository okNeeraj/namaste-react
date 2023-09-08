# Create Custom Hooks (Utility function)

# Single Responsibility Principle

# Bundling

- Chunking
- Code Spliting
- Dynamic Import
- Lazy Loading

# lazy and Suepense

```javascript
import { lazy, Suspense } from "react";

const MarkdownPreview = lazy(() => import("./MarkdownPreview.js"));

<Suspense
  falback={<h1>Loading... - "It will render untill the component rendered"</h1>}
>
  <MarkdownPreview />
</Suspense>;
```

Suppose we need to show MarkdownPreview on markdown-page (http://localhost:1234/markdown) using react router, then we can use as below.

```javascript
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/markdown-page",
    element: (
      <Suspense
        falback={
          <h1>Loading... - "It will render untill the component rendered"</h1>
        }
      >
        <MarkdownPreview />
      </Suspense>
    ),
    errorElement: <Error />,
  },
]);
```
