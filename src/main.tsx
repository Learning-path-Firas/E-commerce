import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MyProvider } from "./contexts/filters_context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<MyProvider>
			<App />
		</MyProvider>
	</React.StrictMode>,
);
