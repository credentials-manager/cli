#!/usr/bin/env node

import { Command } from "commander";
import { listStores } from "./components/store/list";

const program: Command = new Command();

program.action(() => {
	listStores();
});

program.parse(process.argv);
