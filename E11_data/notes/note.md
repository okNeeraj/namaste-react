# Higher Order Component (HOC)

-- A Higher Order Component are those which receive component as a parameter and return a new component.

1. Reusability: HOCs promote code reusability by encapsulating common logic or behavior in a separate component.

2. Functionality Injection: They allow you to inject additional props or behavior into a component.

3. Component Composition: HOCs wrap other components and enhance their functionality without modifying their original code.

4. Pure Functions: HOCs are pure functions that take a component as input and return a new component with added features.

5. Examples: Common use cases for HOCs include authentication handling, routing, state management, and code sharing.

6. Props Proxy: HOCs can intercept and manipulate props, making it possible to pass data or actions down to the wrapped component.

7. No Render Logic: HOCs should not contain any render logic themselves; they should focus on enhancing the wrapped component.

8. Nesting: You can compose multiple HOCs to add multiple layers of functionality to a component.

9. Popular Libraries: Libraries like Redux's connect, React Router's withRouter, and Material-UI's withStyles use HOCs extensively.

10. Custom HOCs: You can create custom HOCs tailored to your application's specific needs.

11. Pros: HOCs promote code separation, maintainability, and code sharing.

12. Cons: Overusing HOCs can lead to a complex component hierarchy and make the code harder to understand.

13. Alternative Patterns: Render Props and React Hooks are alternative patterns for code reuse and component composition.

14. Dynamic Behavior: HOCs can change the behavior of a component dynamically based on props or other factors.

15. Higher Order Component Example: Here's a simple example of a HOC that logs the component's render time:

### Example of HOC

```javascript
import React from "react";

const withBackgroundColor = (WrappedComponent, color) => (props) =>
  (
    <div style={{ backgroundColor: color }}>
      <WrappedComponent {...props} />
    </div>
  );

const HelloMessage = ({ name }) => <p>Hello, {name}!</p>;

const HelloBlue = withBackgroundColor(HelloMessage, "blue");
const HelloGreen = withBackgroundColor(HelloMessage, "green");

function App() {
  return (
    <div>
      <HelloBlue name="John" />
      <HelloGreen name="Alice" />
    </div>
  );
}

export default App;
```
