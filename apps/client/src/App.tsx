import { logger } from "@repo/utils"

function App() {
	logger("Client app started")
	return (
		<div className="p-4">
			<h1 className="font-bold text-2xl">Turborepo Client</h1>
		</div>
	)
}

export default App
