import { prompt, Separator } from "inquirer";
import { Store } from "@credman/core";

export function listStores() {
	const stores: Store[] = Store.getAll();

	const storeItems = stores.map((store) => {
		return {
			name: store.name + (store.encrypted ? " (encrypted)" : ""),
			value: store.id,
		};
	});

	prompt({
		type: "list",
		name: "stores",
		message: "Select a store or create one",
		choices: [
			{ name: "Create new store", value: "CREATE_STORE" },
			new Separator(),
			...storeItems,
		],
	}).then((answers) => {
		console.log(answers);
	});
}
