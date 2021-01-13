import { TITLES, PREFIXES } from './NameParts';

const RandName = (min, max) => Math.random() * (max - min)

export const MakeRandTitle = () => TITLES[Math.floor(RandName(1, 11))];

export const MakeRandPrefix = () => PREFIXES[Math.floor(RandName(1, 16))];


