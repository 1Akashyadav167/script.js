// 1️⃣ JavaScript code runs inside a JavaScript Engine (for example Chrome uses the V8 engine).

// 2️⃣ When code starts, a Global Execution Context is created.

// 3️⃣ Variables are stored in Memory Heap and functions execute in the Call Stack.

// 4️⃣ JavaScript is single-threaded, so the Call Stack executes one task at a time.

// 5️⃣ For asynchronous tasks (setTimeout, API calls, promises), the Event Loop moves callbacks from the Callback Queue to the Call Stack when it becomes empty.