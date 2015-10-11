/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 David Gómez @davegomez
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* eslint-disable */
// jscs: disable

import { assert, expect } from 'chai';
import toArray from '../../src/modules/to-array';
import { list } from '../fixtures';

describe('toArray property', () => {
  const div = document.createElement('div');
  div.innerHTML = list;
  document.body.appendChild(div);

  let fn;
  let obj;
  let node;

  beforeEach(() => {
    fn = toArray();
    obj = {};
    obj.toArray = toArray();
    node = document.querySelectorAll('li');
  });

  it('should return a function', () => {
    expect(toArray()).isFunction;
  });

  it('should have a toArray property', () => {
    expect(obj).property('toArray');
  });

  it('should be defined', () => {
    expect(fn).isDefine;
    expect(obj.toArray).isDefine;
  });

  xit('should return an array like object', () => {
    expect(fn(node)).isArray;
  });
});
