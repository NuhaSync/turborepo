export function logger(message: string, level: "info" | "error" = "info") {
	console.log(`[${level.toUpperCase()} ${new Date().toISOString()}]: ${message}`)
}
