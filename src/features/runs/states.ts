import { atom } from 'jotai';

/**
 * Atom to manage the list of uploaded run files.
 */
export const runsAtom = atom<File[]>([]);