export default class Time {
	
	public static nextAnimationFrame() : Promise<number> {
		return new Promise<number>((resolve) => {
			const frame = window.requestAnimationFrame(() => {
				resolve(frame);
			});
		});
	}
	
	public static timeout(time: number): Promise<void> {
		return new Promise<void>((resolve) => {
			setTimeout(resolve, time);
		});
	}
	
	public static async wait(conditionCallback: () => boolean, time: number = 200): Promise<void> {
		const test = async (): Promise<void> => {
			if (conditionCallback()) {
				return;
			} else {
				await this.timeout(time);
				await test();
				return;
			}
		};
		await test();
		return;
	}
	
};