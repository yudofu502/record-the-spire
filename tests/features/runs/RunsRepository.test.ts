import { runsAtom } from '../../../src/features/runs/states';
import { describe, it, expect } from 'vitest';
import { createStore } from 'jotai';

globalThis.File = class MockFile {
  constructor(public content: string[], public name: string, public options: { type: string }) {}
} as unknown as typeof File;

describe('runsAtom', () => {
  it('should add a run file to the atom', () => {
    const store = createStore();
    const testFile = new File(['test content'], 'test.run', { type: 'application/json' });
    
    store.set(runsAtom, [testFile]);
    
    const runs = store.get(runsAtom);
    expect(runs).toEqual([testFile]);
  });

  it('should update run files in the atom', () => {
    const store = createStore();
    const testFile1 = new File(['content1'], 'file1.run', { type: 'application/json' });
    const testFile2 = new File(['content2'], 'file2.run', { type: 'application/json' });
    
    // 初期状態を設定
    store.set(runsAtom, []);
    
    // ファイルを追加
    store.set(runsAtom, (prev) => [...prev, testFile1]);
    store.set(runsAtom, (prev) => [...prev, testFile2]);
    
    // 結果を確認
    const runs = store.get(runsAtom);
    console.log('Retrieved runs:', runs);
    expect(runs).toEqual([testFile1, testFile2]);
  });
});