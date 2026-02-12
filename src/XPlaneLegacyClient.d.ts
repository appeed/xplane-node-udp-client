declare class XPlaneClient {
	constructor(settings: { host: string, port: number, debug: boolean });

	requestDataRef(dataref: string, frequency: number, callback: (ref: string, data: any) => void): void;
	setDataRef(dataref: string, value: any): void;
	sendCommand(command: string): void;
	initConnection(): void;
}

export = XPlaneClient;
