import { Atem } from '../atem'

export function cleanupAtem(atem: Atem): void {
	const atem2 = atem as any
	atem2.dataTransferManager.stopCommandSending()
}
