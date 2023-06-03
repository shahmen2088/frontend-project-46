#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();

program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version('0.0.1')
    .argument('<filepath1>', '')
    .argument('<filepath2>', '')
    .option('-h, --help', 'output usage information')
    .option('-f, --format <type>', 'output format')
    .parse();

program.help();
